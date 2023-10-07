import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <form className="py-3">
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-envelope"></i></span>
          <input
            type="text"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-lock"></i></span>
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <span
            className="input-group-text"
            id="toggle-password"
            style={{ cursor: 'pointer' }}
            onClick={handlePasswordToggle}
          >
            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </span>
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-success" onClick={handleLogin}>
            Login Now
          </button>
          <p className="text-center mt-3">
            Register Now for free by clicking <a href="index.html">Register Now</a> Button.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
