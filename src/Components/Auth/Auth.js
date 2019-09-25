import React,  {useState} from 'react';
import Signup from './Signup';
import Login from './Login';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [passwordhash, setPasswordhash] = useState('');
  const [login, setLogin] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://glamrepo.herokuapp.com/api/user/signin', {
      method: 'POST',
      body: JSON.stringify({user:{username: username, passwordhash: passwordhash}}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      props.updateToken(data.sessionToken);
    })
  }

  return(
    <div>
     { login ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken} /> }
     <Button onClick={(e) => {setLogin(!login)}}>{ !login ? 'Log In' : 'Signup'}</Button>
    </div>
  )
}
export default Auth;