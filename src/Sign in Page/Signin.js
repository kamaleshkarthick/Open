import React, { useState } from "react";
import "./Signin.css";
import icons from "../Assets/icon_si.svg";
import iconsm from "../Assets/icon_socialmedia.svg";
import Google from "../Assets/google.png";
import Apple from "../Assets/apple.png";
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const navigate = useNavigate();
  const [signInInputs, setSignInInputs] = useState({ email: "", password: "" });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit function");
    if (signInInputs.email && signInInputs.password) {
      navigate("/dashboard");
    }
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target || {};
    const newObj = { ...signInInputs, [name]: value };
    setSignInInputs(newObj);
  };
  return (
    <React.Fragment>
      <section className="main">
        <div className="Left">
          <img className="logo-icon" src={icons} alt="icon" />
          <h1>BASE</h1>
          <img className="social-icon" src={iconsm} alt="icon" />
        </div>

        <div className="Right">
          <div>
            <h2 className="text-5xl font-semibold">Sign In</h2>
            <h3 className="font-medium text-lg ">Sign in to your account</h3>
            <div className="sign-btn">
              <button className="btn ">
                <img src={Google} width="20px" alt="google" />
                Sign in with Google
              </button>
              <button className="btn ">
                <img src={Apple} width="20px" alt="google" />
                Sign in with Apple
              </button>
            </div>
          </div>

          <section className="bg-white px-10 py 20 rounded-2xl border-2  border-gray-200 mt-5">
            <form className="form" onSubmit={handleOnSubmit}>
              <div>
                <label for="email" className="text-lg font-medium">
                  Email
                </label>

                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1  "
                  id="email"
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={signInInputs.email}
                  onChange={handleOnChange}
                />
                
              </div>

              <div>
                <label for="Password" className="text-lg font-medium">
                  Password
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1  "
                  id="Password"
                  type="Password"
                  name="password"
                  placeholder=""
                  value={signInInputs.password}
                  onChange={handleOnChange}
                />
            
              </div>
              <div>
                <button className="text-sky-400 mt-2">Forgot password?</button>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  className=" py-4 rounded-xl bg-blue-500 text-white text-lg font-bold"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <p className=" mt-6">
                Don't have account?
                <span className="text-sky-400 mt-2">Register here</span>
              </p>
            </form>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

// export default withRouter(SigninPage);
export default Login;
