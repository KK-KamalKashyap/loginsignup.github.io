import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup template d-flex justify-content-center align-items-center  vh-100 bg-primary">
      <div className="from_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign up</h3>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
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
          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign up</button>
          </div>
          <p className="text-right mt-2">
            Already Registered
            <Link to="/" className="ms-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
