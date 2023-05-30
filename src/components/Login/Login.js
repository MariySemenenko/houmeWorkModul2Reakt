// import { defaults } from "lodash";
import React from "react";


//dificult form
const INITIAL_STATE = {

password: '',
login: '',
agreed: false

}

class Login extends React.Component {

state = {
...INITIAL_STATE
}

handleSabmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
console.log('Send email and password', {email, password});
this.setState({...INITIAL_STATE});


}

handleInputChange = (e) => {
  const { name, value } = e.target;
this.setState({ [name]: value});

}

handleCheckboxChange = (e) => {
this.setState({ agreed: e.target.checked });

}


render() {
const {email, password, agreed} = this.state;

    return (
        <div style={{marginTop: 100}}>
        
<form onSubmit={this.handleSabmit}>
    <input value={email} placeholder="email" type="text" name="email" onChange={this.handleInputChange} />
    <input value={password} placeholder="password" type="name" name="password" onChange={this.handleInputChange} />

    <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleCheckboxChange}
          />
        </label>

<button disabled={!agreed} type="submit">Submit</button>

</form>

        </div>
    )
}

}

export default Login;