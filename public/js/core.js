/**
 * Custom made DOM API abstraction layer to quickly create new elements
 */

const singleElement = (tag, content = null, event = null, className = null) => {
    let element = document.createElement(tag);
    if (content) {
        element.innerHTML = content;
    }
    if (event) {
        const { type, action } = event;
        element.addEventListener(type, action);
    }

    if (className) {
        element.className = className;
    }
    
    return element;
};

const addClass = (element, className) => {
    element.className += ' ' + className.trim();
    return element;
};

const removeElement = (id) => {
    let child = document.getElementById(id);
    child.parentNode.removeChild(child);
};

const listener = (action, ...event) => {
    event.forEach(e => {
        window.addEventListener(e, action);
    });
};

export {
    singleElement,
    listener,
    removeElement
};