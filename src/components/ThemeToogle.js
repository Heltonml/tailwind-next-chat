import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BiSun } from 'react-icons/bi';
import { GiMoonBats } from "react-icons/gi";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    function isDark() {
        return theme === 'dark';
    }

    return (
        <div className="flex items-end justify-end">
            <button
                className="focus:outline-none"
                onClick={() => setTheme(isDark() ? 'light' : 'dark')}
                aria-label="Theme toggle">
                {isDark() ? <BiSun size={30} /> : <GiMoonBats size={30} />}
            </button>
        </div>
    );
};

export default ThemeToggle;
