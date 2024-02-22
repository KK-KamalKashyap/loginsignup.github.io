import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSignup = () => {
    alert("Sign Up Successfull");
  };

  return (
    <div className="  d-flex vh-100 justify-content-center align-items-center">
      <div className="login  from_container  rounded bg-white  justify-content-center align-items-center ">
        <div className=" rounded bg-white">
          <form>
            <h2 className="text-center login-title py-2 mb-2 font-weight-bold">
              Sign up
            </h2>
            <div className="mb-3 from-floating">
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                placeholder="Enter User Name"
                className="form-control py-3"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="form-control py-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="form-control py-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
              <button
                className="login-btn py-3 rounded-3"
                onClick={() => {
                  handleSignup();
                }}
              >
                Signup
              </button>
            </div>
            <p className="text-center mt-2">
              Already Registered
              <Link to="/" className="ms-2 links">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
