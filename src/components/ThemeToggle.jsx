import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <>
          <Sun className="h-6 w-6 text-yellow-300" />
          <span className="text-sm font-medium text-gray-800 dark:text-white">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-6 w-6 text-blue-900" />
          <span className="text-sm font-medium text-gray-800 dark:text-white">Dark Mode</span>
        </>
      )}
    </button>
  );
};
