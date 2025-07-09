import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
  <button 
    onClick={toggleTheme} 
    className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", 
      "forcus:outline-hidden"
    )}
  >
    {isDarkMode ? (
      <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
      <Moon className="h-6 w-6 text-blue-900" />
    )}
  </button>

  );
};