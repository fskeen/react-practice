
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
   
    addOne () {
        this.setState((prevState) => ({count: prevState.count +1}));
    }

    minusOne () {
        this.setState((prevState) => ({count: prevState.count -1}));
    }
    reset () {
        this.setState(() => ({count: 0}));
    }

    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.querySelector("#app"))

// let count = 0;

// const plusOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const resetBtn = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={plusOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetBtn}>Reset</button>
//         </div>
//     );

//     // ReactDOM.render(what it's pulling from here, where it's putting it in HTML);
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();