import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
