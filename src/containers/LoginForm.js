import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/async';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitLogin(this.state);
    this.setState({
      category: ''
    });
  }

  render () {
    return (
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.handleLogin} >
          <input name="email" value = { this.state.email } onChange = { this.handleChange } />
          <input name="password" type="password" value = { this.state.password } onChange = { this.handleChange } />
          <input type="submit" onClick = { this.handleSubmit } />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  submitLogin
}

export default connect(null, mapDispatchToProps)(LoginForm);
