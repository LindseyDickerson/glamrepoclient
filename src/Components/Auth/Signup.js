import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

//import AddItems from '../Collection/AddItems';
// import { Link } from '@material-ui/core';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://glamrepo.herokuapp.com/api/user/createuser", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, passwordhash: passwordhash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPasswordhash(e.target.value)} type="password" name="password" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
                <p>Already have an account?</p>
            </Form>
        </div>
    )
}; 

export default Signup;