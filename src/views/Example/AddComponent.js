import React from 'react';

class AddComponent extends React.Component {

    state = {
        name: '',
        old: '',
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeOld = (event) => {
        this.setState({
            old: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.name || !this.state.old) {
            alert('Chưa nhập')
            return;
        }
        this.props.addNewUser({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name,
            old: this.state.old
        })

        this.setState({
            name: '',
            old: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Name:</label><br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleChangeName(event)}
                />
                <br />
                <label htmlFor="lname">old:</label><br />
                <input
                    type="text"
                    value={this.state.old}
                    onChange={(event) => this.handleChangeOld(event)}

                />

                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponent;