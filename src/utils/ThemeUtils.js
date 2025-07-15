import { useEffect, useState } from "react";

export function useThemeUtils() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme);
    }, [theme]);

    function changeTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return { theme, changeTheme };
}
