import React, { Component } from 'react';
import { Link } from "react-router-dom";
import User from "./User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []

        };
    }

   

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render()
    

    
    {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            
    // const mystyle = {
    //     color: "white",
    //     position: "fixed",
    //     bottom: "relative"
    //   }; 

   
            return (
                <ul>
                    {users.map(user => (
                        <div key={user.id} className="card text-white bg-info col-sm-2 new1">
                            <h2>
                                {user.name}
                            </h2>
                            <br></br>
                            <ul>
                                <li>{user.phone}</li>
                                <li>{user.email}</li>
                                <br />
                                <br />
                                <Link to={`/users/${user.id}`} >


                                    <button class="btn btn-secondary" >    More Info..</button>
                                </Link>
                            </ul>

                        </div>
                    ))}
                </ul>
            );
        }
    }
}

export default Users;