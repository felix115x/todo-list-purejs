function About() {

    this.template = `
        <h3>About</h3>
        <div>This is the about section</div>
    `;
};

About.prototype.render = function () {
    return this.template;
};

About.prototype.postRender = function () {
    
};

export default About;