import { singleElement } from '../core.js';

function List() {

    this.items = [];

    this.template = `
        <div>
        <h3>List</h3>
        <p>Main functionality page</p>
        <div id='button_group'></div>
        <table id='listitems'></table>

        </div>
    `;
};

List.prototype.getData = async function () {
    let response = await fetch('/list', { method: 'GET' });
    let data = await response.json();

    this.items = data.list;
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
                        console.log('CLICKED THE EDIT BUTTON ' + i.title);
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
                        console.log('CLICKED THE DELETE BUTTON ' + i.title);
                    }
                },
                'button-danger'
            )
        );

        let row = singleElement('tr');

        row.appendChild(title)
        row.appendChild(deadline)
        row.appendChild(status);
        row.appendChild(editButton);
        row.appendChild(deleteButton);

        list.appendChild(row);
    });
};

export default List;