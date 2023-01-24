import React, { Component } from 'react'





class Register extends Component {
    render() {

        return (
            <div>
                <form action='http://localhost:5000/api/signup' method='POST'>

                    <label>username:</label>
                    <input type="text" name="username" />


                    <label>  email:     </label>
                    <input type="email" name="email" />


                    <label> password:      </label>
                    <input type="password" name="password" />


                    <label>   age:    </label>
                    <input type="number" name="age" />


                    <label> Tel:      </label>
                    <input type="text" name="tel" />


                    <input type="submit" value="Inscription" />

                </form>






            </div>
        )
    }
}

export default Register