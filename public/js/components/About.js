function About() {

    this.template = `
        <div>This is the about section</div>
    `;
};

About.prototype.render = function () {
    return this.template;
};

About.prototype.postRender = function () {
    
};

export default About;