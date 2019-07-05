let count = 0;

const plusOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const resetBtn = () => {
    count = 0;
    renderCounterApp();
}






const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetBtn}>Reset</button>
        </div>
    );

    // ReactDOM.render(what it's pulling from here, where it's putting it in HTML);
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();