import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Logout extends React.Component{
    state = {
        navigate: false
    };

    logOut = () => {
        this.setState({
            navigate: true
        });
    }

    render(){
        var divStyle = {
            textAlign: 'right',
            marginBottom: '20px'
        };
        if (this.state.navigate === true) {
            return <Redirect to='/' />
        }
        return (
            <div style={divStyle}>
                <Button onClick={this.logOut}>Log out</Button>
            </div>
        );
    }
}