function Navbar(elements) {

    this.template = `
        <ul class='navbar>
            ${elements.map(e => `<li><a href='#${e.link}'>${e.name}</a></li>`).join('')}
        </ul>
    `;
};

Navbar.prototype.render = function () {
    return this.template;
};

Navbar.prototype.postRender = function () {
    
};

export default Navbar;