import React, { useEffect, useReducer } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import useInput from '../../customhook/useInput';
import axios from 'axios';
// import {useDispatch} from 'react-redux';

const Login = () => {
    const stateUsers = {
        data: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
          case "SET_DATA":
            return {
              data: action.payload
            }
          case "SET_ERROR":
            return {
                data: action.payload
            }
          default:
            break;
        }
      }

    const [state , dispatch] = useReducer(reducer , stateUsers);
    useEffect(() => {
        
        axios.get("http://jsonplaceholder.typicode.com/users").then(
            res => {
                // console.log(res.data);
                dispatch({ type: "SET_DATA", payload: res.data })
            }
        )
    }, [])

    console.log(state);

    const [username,bindUsername,resetUsername] = useInput();
    const [password,bindPassword,resetPassword] = useInput();
    // const dispatch = useDispatch();
    const checkLogin = (e) => {
        e.preventDefault();
        for(let [index , value] of state.data.entries()){
            if ( value.username.toLowerCase() == username.toLowerCase() && value.email.toLowerCase() == password.toLowerCase()) {
                console.log("ada");
            }
        }
        
        // console.log({username,password});
        resetPassword();
        resetUsername();
    }
    return (
        <div>
            <h1>Login</h1>
            <br></br>
            <Form onSubmit = {checkLogin}>
                <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input type="text" name="email" id="exampleEmail" {...bindUsername}/>
                </FormGroup>
                <br></br>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="text" name="password"{...bindPassword}/>
                </FormGroup>
                <br></br>
                <Button>Submit</Button>
            </Form>
            
        </div>
    )
}

export default Login;