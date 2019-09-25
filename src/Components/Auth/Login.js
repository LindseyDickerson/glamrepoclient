import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';





const Login = (props) => {
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');
    const [login, setLogin] = useState(true);

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)
        setUsername('')
        setPasswordhash('')
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://glamrepo.herokuapp.com/api/user/signin'

        fetch( url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user: {
                username: username,
                passwordhash: passwordhash
            }})
        }).then(res => res.json()
        ).then((data) => {
        props.updateToken(data.sessionToken);
        })
        
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPasswordhash(e.target.value)} type="password" name="passwordhash" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Login</Button>
                <p>Need to sign up?</p>
            </Form>
        </div>
    )
}

export default Login;