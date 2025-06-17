import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from 'react';


interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const MyContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};
