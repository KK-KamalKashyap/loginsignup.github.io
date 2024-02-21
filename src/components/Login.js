import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-primary">
      <div className="from_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="remember"
              className="custom-control custom-checkbox"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="remember"
              />
              <span className="custom-control-label ms-2">Remember me</span>
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p className="text-right mt-2">
            Forgot <a href="#top">Password?</a>{" "}
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
