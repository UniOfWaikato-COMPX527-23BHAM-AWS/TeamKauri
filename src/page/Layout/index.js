import { Link, Outlet } from "react-router-dom";
import "./index.css";

const backgroundImage_2 = "https://d1j7agfhqjd3zu.cloudfront.net/familyC.png";

const Layout = () => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgroundImage_2}))`,
        }}
      >
        <div className="logo">
          Livability
          {/* <img src={logoImage} alt="Livability Logo" className="logo-image" /> */}
        </div>
        <div>
          <Link to="/" className="link">
            Homepage
          </Link>
          <Link to="/login_1" className="link">
            Login
          </Link>
          <Link to="/about" className="link">
            about
          </Link>
        </div>
      </div>
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  );
};

export default Layout;
