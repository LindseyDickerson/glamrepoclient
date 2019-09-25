import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Logo from '../../assets/glamrepocropped.png'

let Toggle = (props) => {
    const [toggleButton, setToggleButton] = useState(false);
    
    let handleChange = (e) => {
        console.log('button has been clicked!');
        e.preventDefault();
        if(toggleButton === false) {
            return(
                <h4>{props.Signup}</h4>,
                setToggleButton(true)
            )
        } else {
            return(
                <h4>{props.Login}</h4>,
                setToggleButton(false)
            )
        }
    }
    return(
        <props.Card>
            <Button onClick={(e) => handleChange(e)}>{toggleButton = true ? props.Login : props.Signup}</Button>
        </props.Card>
    );
};

export default Toggle;