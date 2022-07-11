import React, { Component } from 'react'
import Unmountingdata from './Unmountingdata';

export default class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
        }
    }

    render() {
        return (
            <>
                {
                    this.state.toggle ?
                        <Unmountingdata /> : null
                }
                <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>Clear</button>
            </>
        )
    }
}
