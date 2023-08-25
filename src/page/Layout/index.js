import { Link, Outlet } from "react-router-dom";
import "./index.css";
import logoImage from "../img/logo.png";
import backgroundImage from "../img/city.png";
import backgroundImage_2 from "../img/familyC.png";

const Layout = () => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgroundImage_2}, url(${backgroundImage}))`,
        }}
      >
        <div className="logo">
          Livability
          <img src={logoImage} alt="Livability Logo" className="logo-image" />
        </div>
        <div>
          <Link to="/" className="link">
            Homepage
          </Link>
          <Link to="/login" className="link">
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
