import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 'Alice'
        }
        // TODO: some problem with focus
        // focus goes to dialog because of the ref
        // however, it cannot be moved to other radio buttons using arrows
        this.dialog = React.createRef();
    }

    componentDidUpdate() {
        console.log('component update');
        if (this.props.isVisible === true) {
            this.dialog.current.focus();
        }
    }

    handleClick() {
        this.props.onDialogFormSubmit(this.state.value);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div 
                id="dialog" 
                role="dialog" 
                className={this.props.isVisible? '':'hidden'}
            >
                <div className="visuallyhidden" tabIndex="-1" ref={this.dialog}></div>
                <form>
                    <fieldset>
                        <label>Choose name</label>
                        <label>                
                            <input defaultChecked value="Alice" type="radio" name="namegroup" onChange={this.handleChange}/>Alice
                        </label>

                        <label>
                            <input value="Bob" type="radio" name="namegroup" onChange={this.handleChange}/>Bob
                        </label>

                        <label>
                            <input value="Charles" type="radio" name="namegroup" onChange={this.handleChange}/>Charles
                        </label>
                    </fieldset>
                    <button type="button" onClick={this.handleClick}>Confirm</button>
                </form>
            </div>
        );
    }
}

export default Dialog;