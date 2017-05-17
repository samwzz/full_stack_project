import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.props.closeSignupModal());
  }

  switchForm(e) {
    e.preventDefault();
    this.props.closeSignupModal();
    this.props.openLoginModal();
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors && this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
           {this.renderErrors()}
           <div className="login-form">
             <br/>
             <label>Username:
               <br/>
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="login-input"
               />
             </label>
             <br/>
             <label>Email:
               <br/>
               <input type="text"
                 value={this.state.email}
                 onChange={this.update('email')}
                 className="login-input"
                 />
             </label>
             <br />
             <label>Password:
               <br/>
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
               />
             </label>
             <br/>
             <input type="submit" value="Submit" />
             <br/>
             <div>
               Already have an account?
               <a href="#" onClick={this.switchForm}> Log in</a>
             </div>
           </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
