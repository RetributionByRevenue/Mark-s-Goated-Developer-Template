import { h, render } from './libraries/preact-min.js'
import App from "./components/app.js"
import htm from './libraries/htm-min.js'
const html = htm.bind(h)

render(html`<${App} />`, document.querySelector('#app-container'))