function Home() {

    this.template = `
        <div>
        <h3>Home</h3>
        <div>
            This is a home page
        </div>
        <p>To-Do application, create issues, edit them, mark as done and delete</p>
        
        <button id='view'>View</button>
        </div>
    `;
};

Home.prototype.render = function () {
    return this.template;
};

Home.prototype.postRender = function () {
    document.getElementById('view').addEventListener('click', () => {
        alert('VIEW');
        console.log('VIEW');
    });
};

export default Home;