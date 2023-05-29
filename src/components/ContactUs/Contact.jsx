import React from "react";

// not controlled form
class ContactUs extends React.Component {

handleFormSubmit(event) {
    event.preventDefault();
    const { phone, username } = event.target.elements;
    const phoneValue = phone.value;
    const usernameValue = username.value;
    console.log({ phone, username });

}

render() {
    return(
<div style={{marginTop: 100}}>



        <form onSubmit={this.handleFormSubmit}>
        <input placeholder="userName" type="text" name="username" />
        <input placeholder="userNumber" type="tel" name="phone" />
        <button type="submit">Login</button>
    </form>

    </div>
    )
    
}

}

export default ContactUs;