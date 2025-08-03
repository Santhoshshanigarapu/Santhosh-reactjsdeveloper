import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../themes/themes";

const Header = () => {
  const { theme, setThemeByName } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Multi Theme App</h1>
      <select
        value={theme.name}
        onChange={(e) => setThemeByName(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {themes.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
