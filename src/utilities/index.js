import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/', { linksSelector: "a", hash: true });


const render = (container, content) => {
    content.innerHTML = container
}

export {
    router, render
}