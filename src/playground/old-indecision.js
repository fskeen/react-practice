console.log("Hello!");

// JSX = JavaScript XML, a JS language extension

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    options: []
};
console.log(app.options)


const addToList = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        console.log(app.options);
        renderer();
    }
    
}

const removeAll = () => {
    app.options = [];
    console.log(app.options);
    renderer();
};

const makeDecision = () => {

    if (app.options.length > 0) {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum]
        alert(option);
        console.log(randomNum)  
    }
 
};

const appRoot = document.getElementById('app');

const renderer = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options: " : "No options available."}</p>

            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>

            <button onClick={removeAll}>Remove All</button>

            <ol>
            {/* Map over app.options getting back list of items. Set key and text. Items will show up once you submit forms. */}
                {
                    app.options.map((op) => <li key={op}>{op}</li>)
                }
            </ol>
            <form onSubmit={addToList}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderer()