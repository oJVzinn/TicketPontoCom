import styles from "./Bost.module.css"
import ThemeChanger from "../ThemeChanger";

export default function Body( {themeUtils, children} ) {
    return (
        <body className={styles.Body}>
            <ThemeChanger themeUtils={themeUtils}/>
            {children}
        </body>
    )
}