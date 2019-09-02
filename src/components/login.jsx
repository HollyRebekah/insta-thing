import React from 'react';
import '../css/login.css';

const Login = () => {
  return (
    <div>
      <form>
          Email:
        <input className="input-field" name="email" />
      </form>
      <form>
          Full name:
        <input className="input-field" name="fullname" />
      </form>
      <form>
          Username:
        <input className="input-field" name="username" />
      </form>
      <form>
          Password:
        <input className="input-field" name="password" />
      </form>
    </div>
  );
};

export default Login;
