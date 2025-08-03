import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, DEFAULT_THEME, } from "../themes/themes";
import type { Theme } from "../themes/themes";

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const savedThemeName = localStorage.getItem("theme");
    const savedTheme = themes.find(t => t.name === savedThemeName);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const setThemeByName = (name: string) => {
    const selectedTheme = themes.find(t => t.name === name);
    if (selectedTheme) {
      setTheme(selectedTheme);
      localStorage.setItem("theme", name);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
    <div className={`transition-all duration-500 ease-in-out min-h-screen ${theme.className} ${theme.font}`}>
      {children}
    </div>
  </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
