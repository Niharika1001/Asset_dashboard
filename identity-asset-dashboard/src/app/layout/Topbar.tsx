import { useTheme } from "../../context/useTheme";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b flex items-center justify-between px-6">
      <h1 className="font-semibold text-gray-800 dark:text-white">
        Identity Asset Dashboard
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          U
        </div>
      </div>
    </header>
  );
}
