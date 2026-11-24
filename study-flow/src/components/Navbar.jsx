
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  return (
    <nav className="flex flex-wrap gap-3 mt-6">
      <NavLink to="/" className={linkClasses}>
        Dashboard
      </NavLink>

      <NavLink to="/tasks" className={linkClasses}>
        Tasks
      </NavLink>

      <NavLink to="/focus" className={linkClasses}>
        Focus
      </NavLink>

      <NavLink to="/settings" className={linkClasses}>
        Settings
      </NavLink>
    </nav>
  );
}

export default Navbar;
