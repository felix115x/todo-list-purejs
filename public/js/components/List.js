import { singleElement, removeElement } from '../core.js';

function List() {

    this.items = [];

    this.template = `
        <div>
        <h3>List</h3>
        <p>Main functionality page</p>
        <div id='button_group'></div>
        <table id='listitems'></table>

        </div>
        <div id='listmodal' class='modal'>
            <div class='modal-content'>
                <span id='closebtn' class="close">&times;</span>
                <p>Update event</p>
                <label>Title</label>
                <input placeholder="What's the deal" id='titleinput' type='text'></input>
                <br>
                <label>Date</label>
                <input placeholder='Pick a date' id='dateinput' type='text'></input>
                <br>
                <label>Status</label>
                <input placeholder='Set status' id='statusinput' type='text'></input>
                <br>
                <input id='updatebtn' type='submit'></input>
            </div>
        </div>
    `;
};

List.prototype.getData = async function () {
    let response = await fetch('/list', { method: 'GET' });
    let data = await response.json();

    this.items = data.list;
};

List.prototype.editEntry = function (id) {
    let modal = document.getElementById('listmodal');
    let update = document.getElementById('updatebtn');
    let close = document.getElementById('closebtn');

    update.onclick = () => this.updateEntry(id);
    close.onclick = () => modal.style.display = 'none';

    modal.style.display = 'block';
};

List.prototype.updateEntry = async function (id) {
    let entry = this.items.find(e => e.id === id);

    let titleInput = document.getElementById('titleinput').value || entry.title;
    let dateInput = document.getElementById('dateinput').value || entry.deadline;
    let statusInput = document.getElementById('statusinput').value || entry.status;

    let response = await fetch(
        `/list/${id}`,
        { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: titleInput, 
                deadline: dateInput,
                status: statusInput
            })
        }
    );
    let data = await response.json();

    this.items = data.list;

    let modal = document.getElementById('listmodal');
    modal.style.display = 'none';
};

List.prototype.deleteEntry = async function (id) {
    let response = await fetch(`/list/${id}`, { method: 'DELETE' });
    let data = await response.json();

    this.items = data.list;

    removeElement(`entry_${id}`);
};

List.prototype.render = async function () {
    return this.template;
};

List.prototype.postRender = async function () {
    await this.getData();
    let list = document.getElementById('listitems');
    
    this.items.map(i => {
        let title = singleElement('td', i.title);
        let deadline = singleElement('td', i.deadline);
        let status = singleElement('td', i.status);

        let editButton = singleElement('td');
        editButton.appendChild(
            singleElement(
                'button', 
                'Edit', 
                {
                    type: 'click',
                    action: () => {
                        this.editEntry(i.id);
                    }
                },
                'button-primary'
            )
        );

        let deleteButton = singleElement('td');
        deleteButton.appendChild(
            singleElement(
                'button', 
                'Delete', 
                {
                    type: 'click',
                    action: () => {
                        this.deleteEntry(i.id);
                    }
                },
                'button-danger'
            )
        );

        let row = singleElement('tr');
        row.id = `entry_${i.id}`;

        row.appendChild(title)
        row.appendChild(deadline)
        row.appendChild(status);
        row.appendChild(editButton);
        row.appendChild(deleteButton);

        list.appendChild(row);
    });
};

export default List;