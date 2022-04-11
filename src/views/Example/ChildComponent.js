import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    //re-render
    state = {
        showUser: false
    }

    handleShowHide = () => {
        this.setState({
            showUser: !this.state.showUser
        })
    }

    handleOnclickDelete = (user) => {
        console.log('>>> handleOnclickDelete: ', user)
        this.props.deleteAUser(user)
    }

    render() {
        let { arrUser } = this.props;
        let { showUser } = this.state;
        let check = showUser === true ? 'showUser = true' : 'showUser = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showUser === false ?
                    <div>
                        <button style={{ color: 'red' }}
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrUser.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.name} - {item.old}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}

export default ChildComponent;
