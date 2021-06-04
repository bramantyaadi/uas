
import React, { useEffect, useReducer, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import useInput from '../../customhook/useInput';
import {addNote} from "../../store/actions/noteAction"
import {useDispatch} from "react-redux";

const Home = () => {

    const stateTemp = {
        data: []
    }

    const [state2 , setState2] = useState([]);


    const [keterangan , bindKeterangan , resetKeterangan] = useInput();
    const [jumlah , bindJumlah , resetJumlah] = useInput();
    const dispatch = useDispatch()


    const reducer = (state, action) => {
        switch (action.type) {
          case "SET_DATA":
            return {data: action.payload}
          case "SET_ERROR":
            return {
                data: action.payload
            }
          default:
            break;
        }
      }
    
    const [state , dispatch2] = useReducer(reducer , stateTemp);
    // console.log(state2);
    const Input = (e) => {
        e.preventDefault();
        // console.log(keterangan , jumlah);
        setState2([...state2,{keterangan , jumlah}]);
        dispatch2({ type: "SET_DATA", payload: {keterangan , jumlah}})
        dispatch(addNote({keterangan,jumlah}))
        
        resetJumlah();
        resetKeterangan();

    }

    function renderData() {
        return(
            <h1></h1>
        )
    }

    return (
            
            <div>
            <Form onSubmit={Input}>
                <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Kategori</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="username" {...bindKeterangan}/>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Jumlah</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="username" {...bindJumlah}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="inputPassword" className="col-sm-1 col-form-label"></label>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="inputPassword" className="col-sm-1 col-form-label"></label>
                        <div className="col-sm">
                        <Button>Tambah Pengeluaran</Button>
                        </div>
                    </div>
                </div>
                </div>
            </Form>
            <ul>
                {state2.map(item => (
                    <div className='col-sm-12 col-lg-4 mb-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Keterangan : {item.keterangan}</h5>
                            <h5 className="card-title">Keterangan : {item.keterangan}</h5>
                            <p class="card-text">Jumlah : {item.jumlah}</p>
                            <button className='btn btn-danger' >Delete</button>
                        </div>
                    </div>
                </div>
                ))}
            </ul>
            </div>
    )
}

export default Home;