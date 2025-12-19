import { NavLink } from "react-router-dom";

const links = [
  { label: "Certificates", to: "/certificates" },
  { label: "SSH Keys", to: "/ssh-keys" },
  { label: "Code Signing Keys", to: "/code-signing" },
  { label: "Audit Logs", to: "/audit-logs" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r hidden md:block">
      <div className="p-6 font-bold text-blue-600">
        Identity Asset
      </div>
      <nav className="space-y-1">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block px-6 py-3 text-sm ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
