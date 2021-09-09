import React from 'react';
import Dialog from './Dialog';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isDialogVisible: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.inputRef = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('hello ', this.state.name);
    }

    handleInputChange(e) {
        this.setState({name: e.target.value});
    }

    toggleDialog(nameInput) {
        this.setState({isDialogVisible: !this.state.isDialogVisible});
        if (typeof nameInput === 'string') {
            this.setState({name: nameInput});
            this.inputRef.current.focus();
        }
    }

    componentDidUpdate() {
        console.log('name ',this.state.name);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name: 
                        <input 
                            type="text" 
                            id="name" 
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            ref={this.inputRef}
                        />
                    </label>
                    
                    <button 
                        type="button" 
                        className="button-icon"
                        onClick={this.toggleDialog}
                    >
                        <span className="visually-hidden">Get possible names</span>
                        <i className="icon"></i>
                    </button>

                    <input type="submit" value="Submit" />
                </form>
                <Dialog 
                    isVisible={this.state.isDialogVisible} 
                    onDialogFormSubmit={this.toggleDialog}  
                />
            </div>
        );
    }
}

export default Form;