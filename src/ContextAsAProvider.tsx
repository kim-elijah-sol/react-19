import { PropsWithChildren, createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<Theme>("dark");

function ContextAsAProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext value={theme}>
      {/** ThemeContext.Provider 대신 ThemeContext 로 사용할 수 있음.
       * 추후에 $Context.Provider 는 제거될 예정
       */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </ThemeContext>
  );
}

function Children() {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

ContextAsAProvider.Children = Children;

export default ContextAsAProvider;
