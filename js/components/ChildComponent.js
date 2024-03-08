import { h } from '../libraries/preact-min.js'
import htm from '../libraries/htm-min.js'
const html = htm.bind(h)

export default function ChildComponent(props) {
  console.log(props)
  return html`
      <h4>This is a Preact Child Prop:</h4>
      <p>I made a call to an advice api, here is the return:</p>
      <p style="background-color:red">${props.advice}</p>
    `;
}