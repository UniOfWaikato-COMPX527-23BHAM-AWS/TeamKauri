import "./index.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://13.239.114.7:5000/Account/register",
        {
          Username: username,
          Password: password,
          Email: email,
          Phonenumber: phonenumber,
        }
      );
      if (response.status === 201) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      // 错误处理
      console.error("failed login:", error.response.data);
    }
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="left">
            {/* <div class="background-img"></div> */}
            <div className="text">
              <p>
                <i>Sign up to make a good life</i>
              </p>
            </div>
          </div>
          <div className="right">
            <div className="signup">
              <p className="username">User Name</p>
              <div className="input">
                <input
                  type="text"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <p className="password">Password</p>
              <div className="input">
                <input
                  type="text"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="email">Email</p>
              <div className="input">
                <input
                  type="text"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p className="phonenumber">Phone Number</p>
              <div className="input">
                <input
                  type="text"
                  placeholder=""
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
              <div className="button">
                <button onClick={handleSignup}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
