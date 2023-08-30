import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const city = "https://d1j7agfhqjd3zu.cloudfront.net/city.png";

const Login_1 = () => {
  const navigate = useNavigate();
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
        <div class="leaves">
          <div class="set">
            {/* <div>
              <img src={snowflower1} alt="" />
            </div>
            <div>
              <img src={snowflower2} alt="" />
            </div>
            <div>
              <img src={snowflower1} alt="" />
            </div>
            <div>
              <img src={snowflower2} alt="" />
            </div> */}
          </div>
        </div>
        {/* <img src={Backstar} alt="" className="bg" />
        <img src={tree} alt="" className="tree2" />
        <img src={tree} alt="" className="tree3" /> */}
        <img src={city} alt="" className="city" />
        <div className="login">
          <h2>Sign In</h2>
          <div className="login-content">
            <div className="left-section">
              <div className="input">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <input type="password" placeholder="Password" />
              </div>
              <div className="input">
                <input type="submit" value="Login" id="btn" />
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
