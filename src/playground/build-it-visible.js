
// create component w 3 methods: render, constructor, handletogglevisibility
//state: visibility: false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        // set state here
        this.toggleVis = this.toggleVis.bind(this);
        this.state = {
            visibility: false
        }
    };

    toggleVis () {
        return this.setState((a) => ({visibility: !a.visibility}))
    };

    render () {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVis}>
                {this.state.visibility ? "Hide Details" : "Show Details"}
            </button>

            {this.state.visibility && (
                <div>
                    <p>Hey, check out these DETAILS!!</p>
                </div>)}
        </div>
        )
    };
};

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"))