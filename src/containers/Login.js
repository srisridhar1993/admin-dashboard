import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../styles/Login.css";
import { Redirect } from 'react-router';

export default class Login extends React.Component {
    state = {
        email: "",
        password:"",
        toDashboard: false,
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userEmail', this.state.email);
        this.setState({
            toDashboard: true
        })
    }
    onUserEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className="Login">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.onUserEmailChange}
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            type="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}