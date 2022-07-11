import React, { Component } from 'react';
import axios from 'axios';

class Apiget extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(response => {

                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { posts } = this.state
        return (
            <><br></br>
                <h1>Http Get REQUEST</h1>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
            </>
        )
    }
}


export default Apiget;