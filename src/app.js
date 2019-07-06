
// Adding props to the <Thing /> makes those props accessible to the <Thing /> class down below. Just like props on an object, these are key:value pairs and can store a lot of different types of literals -- strings, arrays, objects?, numbers

// in this instance, title and subtitle props are passed down to the Header, and the options array is passed down via the options prop to Options.
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['thing 1', 'thing 2', 'thing 4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handlepick!");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll=this.removeAll.bind(this);
    }
    removeAll() {
        alert("BALEETED")
    }
    
    render() {
        return (
            <div>
                <h3>There are {this.props.options.length} options available to you.</h3>

                <button onClick={this.removeAll}>Remove All</button>
                
                {this.props.options.map(a => <Option key={a} optionText ={a}/>)}
            </div>
            
        );
    }
}
// 
class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option: {this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.inputOption.value.trim();
        if (option) {
            alert(option)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="inputOption"></input>
                <button>Add option here</button>
            </form>
            
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));