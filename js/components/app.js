import { h } from '../libraries/preact-min.js'
import { useEffect, useState } from '../libraries/preact-min-hooks.js'
import htm from '../libraries/htm-min.js'
import ChildComponent from './ChildComponent.js';

const html = htm.bind(h)

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json.slip.advice);
                setIsLoading(false);
            } catch (error) {
                console.log("error", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return html`
        <div style="border-style: double">
            <h3>Preact Parent Prop </h3>
            <hr/>
            ${isLoading ? (
                html`<div>Loading...</div>`
            ) : (
                html`<div>${ChildComponent({ advice })}</div>`
            )}
        </div>
    `;
};

export default App;