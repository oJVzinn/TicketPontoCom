import styles from "./Bost.module.css"
import ThemeChanger from "../ThemeChanger";

export default function Body( {themeUtils, children} ) {
    return (
        <main className={styles.Body}>
            <ThemeChanger themeUtils={themeUtils}/>
            <div className={ styles.content }>
                {children}
            </div>
        </main>
    )
}