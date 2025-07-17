import styles from "./Header.module.css"
import {useEffect, useState} from "react";
import {Link} from "react-router";
import Container from "../Container";

export default function Header( {themeUtils} ) {
    const [iconSrc, setIconSrc] = useState(themeUtils.theme === "light" ? "/assets/iconBlack.png" : "/favIcon.png");
    useEffect(() => {
        setIconSrc(themeUtils.theme === "light" ? "/assets/iconBlack.png" : "/favIcon.png");
    }, [themeUtils.theme]);

    return (
        <header className={styles.Header}>
            <nav className={styles.background}>
                <img alt="logo" src={iconSrc} className={styles.logo} />
                <Container width="50%" bg="none" direction="row" align="center" justify="end">
                    <ul className={styles.redirects}>
                        <li>
                            <button className={styles.redirect}>Início</button>
                        </li>
                        <li>
                            <button className={styles.redirect}>Comprar</button>
                        </li>
                        <li>
                            <button className={styles.redirect}>FAQ</button>
                        </li>
                    </ul>
                    <Link to="/" className={styles.login}>Logar</Link>
                </Container>
            </nav>
        </header>
    )
}