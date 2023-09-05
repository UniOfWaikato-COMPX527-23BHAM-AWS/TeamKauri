import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const city = "https://d1j7agfhqjd3zu.cloudfront.net/city.png";

const Login_1 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://13.239.114.7:5000/Account/login",
        {
          Username: username,
          Password: password,
        }
      );
      if (response.status === 200) {
        // 登录成功，处理返回的数据，如存储Token等
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
    // <div>
    //   我是登录页
    //   {/* 声明式的写法 */}
    //   <Link to="/article">跳转到文章页</Link>
    //   {/* 命令式的写法 */}
    //   <button onClick={() => navigate('/article')}>跳转到文章页</button>
    //   <button onClick={() => navigate('/article?id=1001&name=jack')}>searchParams传参</button>
    //   <button onClick={() => navigate('/article/1001/jack')}>params传参</button>
    // </div>
    <div>
      <section>
        <div className="leaves">
          <div className="set"></div>
        </div>
        <img src={city} alt="" className="city" />
        <div className="login">
          <h2>Sign In</h2>
          <div className="login-content">
            <div className="left-section">
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="submit"
                  value="Login"
                  id="btn"
                  onClick={handleLogin}
                />
              </div>
            </div>
            <div className="right-section">
              <div className="input">
                <button id="facebook-login-btn">Facebook Account</button>
              </div>
              <div className="input">
                <button id="google-login-btn">Google Account</button>
              </div>
            </div>
          </div>
          <div className="group">
            <a href="#">Forget Password</a>
            <a href="#" onClick={() => navigate("/Signup")}>
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login_1;
