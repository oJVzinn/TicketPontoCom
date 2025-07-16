import styles from "./ThemeChanger.module.css"
import {useEffect, useState} from "react";

export default function ThemeChanger( {themeUtils} ) {
    const [iconSrc, setIconSrc] = useState(themeUtils.theme === "light" ? "./assets/sunnyTheme.svg" : "./assets/nightTheme.svg");
    const [isFading, setIsFading] = useState(false);
    function handleThemeChange() {
        setIsFading(true);
        setTimeout(() => {
            themeUtils.changeTheme();
            setIsFading(false);
        }, 300);
    }

    useEffect(() => {
        setIconSrc(themeUtils.theme === "light" ? "./assets/sunnyTheme.svg" : "./assets/nightTheme.svg");
    }, [themeUtils.theme]);

    return (
        <div className={styles.ThemeChanger}>
            <button className={styles.themeButton} onClick={handleThemeChange}>
                <img className={`${styles.themeIcon} ${isFading && styles.fadeOut}`}
                     src={iconSrc}
                     alt="changeTheme"
                />
            </button>
        </div>
    )
}