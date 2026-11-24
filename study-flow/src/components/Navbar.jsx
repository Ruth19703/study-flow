import {NavLink} from "react-router-dom";
const navigation = [
    { name: "Dashboard", path: "/"},
    { name: "Tasks", path: "/tasks"},
     { name: "Focus", path: "/focus" },
  { name: "Settings", path: "/settings" },
]

function NavBar() {
    return (
        <nav className="flex flex-wrap gap-2">
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;