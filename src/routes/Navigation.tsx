import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=>isActive?'nav-active':''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=>isActive?'nav-active':''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=>isActive?'nav-active':''}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/users" element={<h1>users</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};