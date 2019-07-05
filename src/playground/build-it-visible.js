/*// set up where the React stuff is injected
const appRoot = document.querySelector("#app");

// functions go here!

const showOrHide = () => {
    if (btn.innerText === "Show Details") {
        btn.innerText = "Hide Details";
        pTag.innerText = "Whoa, check out these deets!";
        renderer()
        return 1
    } else {
        btn.innerText = "Show Details";
        pTag.innerText = "";
        renderer()
        return 0
    }
};

// render function goes here

const renderer = () => {
    const template = (
        // injected code goes here
        <div>
            <h1>Visibility Toggle</h1>
            <button id="btn" onClick={showOrHide}>Show Details</button>
            <p id="pTag"></p>
            
        </div>        
    )
    // telling the page what to use React on and where in the HTML to inject it
    ReactDOM.render(template, appRoot);
};

renderer() */


let visibility = false;

const toggleVis = () => {
    visibility = !visibility;
    renderer();
};

const renderer = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVis}>
                {visibility ? "Hide Details" : "Show Details"}
            </button>

            {visibility && (
                <div>
                    <p>Hey, check out these DETAILS!!</p>
                </div>)}
        </div>
    );
    ReactDOM.render(template, document.querySelector("#app"));
};

renderer();