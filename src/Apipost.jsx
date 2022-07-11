import React, { Component } from 'react';
import axios from 'axios';

export default class Apipost extends Component {

    render() {
        let submithandler = (event) => {
            event.prevent = event.target.email.value;
            axios.post("https://jsonplaceholder.typicode.com/albums");
        }
        return (
            <>
                <h1>Http Post Method</h1>
                <form onSubmit={submithandler}>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="email" id="email"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="current-password" className="password" id="password"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </>
        )
    }
}
