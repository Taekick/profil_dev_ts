import React, { Context, createContext, FC, useContext, useState } from "react";
import { ThemeContext } from "../types";

const defaultMode = "light";

export const ManageThemeContext: Context<ThemeContext> = createContext({
  mode: defaultMode,
  toggle: () => {},
});

export const useTheme = () => useContext(ManageThemeContext);

export const ThemeManager: FC = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: defaultMode,
  });

  const toggle = (): void => {
    setThemeState({ mode: themeState.mode === "light" ? "dark" : "light" });
  };

  return (
    <ManageThemeContext.Provider
      value={{
        mode: themeState.mode,
        toggle: toggle,
      }}
    >
      {children}
    </ManageThemeContext.Provider>
  );
};
