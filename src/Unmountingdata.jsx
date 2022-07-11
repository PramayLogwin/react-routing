import React, { Component } from 'react'

export default class Unmountingdata extends Component {
    componentWillUnmount() {
        alert("Are You Sure Delete Data....!!!")
    }
    render() {
        return (
            <> <h1>Component Willunmounting</h1>
                <ul>
                    <li>Name:Pramay</li>
                    <li>Email:Pramay@gmail.com </li>

                </ul>
            </>

        )
    }
}
