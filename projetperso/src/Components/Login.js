import React, { Component } from 'react'

 class Login extends Component {
  render() {
    return (
      <div>
<form action='http://localhost:5000/api/login' method='POST'>
<label>username</label>
<input type="text"  name='username' />

<label>password</label>
<input type="password"  name='password' />

<input type="submit"  value='Connexion' />





</form>








      </div>
    )
  }
}

export default Login