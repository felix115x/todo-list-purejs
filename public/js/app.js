import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import List from './components/List.js';
import About from './components/About.js';

import { listener } from './core.js';

const App = () => {
    const navElements = [
        {
            name: 'Home',
            link: 'home'
        },
        {
            name: 'To-do list',
            link: 'list'
        },
        {
            name: 'About',
            link: 'about'
        }
    ];

    const getRoute = () => window.location.href.split('#')[1] || '';

    const renderPage = async (at, content) => {
        document.getElementById(at).innerHTML = await content.render();
        await content.postRender();
    };

    renderPage('head', new Navbar(navElements));

    const router = () => {
        let route = getRoute();
    
        switch (route) {
            case '':
            case 'home':
                renderPage('main', new Home());
                break;
            case 'list':
                renderPage('main', new List());
                break;

            case 'about':
                renderPage('main', new About());
                break;
        }
    };

    listener(router, 'load', 'hashchange');
    /* 
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
    */
};

App();