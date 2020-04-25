/**
 * Custom made DOM API abstraction layer to quickly create new elements
 */

const singleElement = (tag, content = null, event = null) => {
    let element = document.createElement(tag);
    if (content) {
        element.innerHTML = content;
    }
    if (event) {
        const { type, action } = event;
        element.addEventListener(type, action);
    }
    
    return element;
};

const listener = (action, ...event) => {
    event.forEach(e => {
        window.addEventListener(e, action);
    });
};

export {
    singleElement,
    listener
};