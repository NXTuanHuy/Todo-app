import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {


    //key:value
    state = {
        arrUser: [
            { id: '1', name: 'Huy', old: '1' },
            { id: '2', name: 'Tuấn', old: '2' },
            { id: '3', name: 'abc', old: '3' }
        ]
    }


    addNewUser = (user) => {
        this.setState({
            arrUser: [...this.state.arrUser, user]
        })

    }

    deleteAUser = (user) => {
        let currenUser = this.state.arrUser;
        currenUser = currenUser.filter(item => item.id !== user.id);
        this.setState({
            arrUser: currenUser
        })
    }


    render() {
        return (
            <>
                <AddComponent
                    addNewUser={this.addNewUser}
                />


                <ChildComponent
                    arrUser={this.state.arrUser}
                    deleteAUser={this.deleteAUser}
                />


            </>
        )

    }
}

export default MyComponent;
