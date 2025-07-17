import styles from "./BannerFilm.module.css"
import {useEffect, useState} from "react";
import getResourceImage from "../../../../utils/ClassificationUtils";

export default function BannerFilm( {filmName, filmDesc, filmDuration, filmCategory, filmAgeIndication} ) {
    const [descVisibility, setDescVisibility] = useState(false)
    useEffect(() => {
        document.querySelectorAll(`.${styles.BannerFilm}`).forEach((element) => {
            let style = element.style;
            style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(./assets/ComoTreinarSeuDragao.png)`
        })
    }, []);


    return (
        <ul className={styles.BannerFilm}
            onMouseEnter={() => setDescVisibility(true)}
            onMouseLeave={() => setDescVisibility(false)}
        >
            <li>
                <img src="./assets/DTSDLogo.png" alt="filmLogo" className={styles.filmLogo}/>
            </li>

            <li>
                <ul className={styles.info}>
                    <li className={styles.filmDescInfo}><img className={styles.indicativeImg} alt="imgIndicative" src={getResourceImage(filmAgeIndication)}/></li>
                    <li>•</li>
                    <li className={styles.filmDescInfo}>{filmDuration}</li>
                    <li>•</li>
                    <li className={styles.filmDescInfo}>{filmCategory}</li>
                </ul>
            </li>

            <li className={`${styles.filmDesc} ${descVisibility ? styles.animateFade : styles.animateOut}`}>
                <span>{filmDesc}</span>
            </li>

            <li>
                <ul className={styles.buttons}>
                    <li>
                        <button className={styles.button} onClick={() => {

                        }}>Adquire Agora!</button>
                    </li>
                    <li>
                        <button className={styles.button} onClick={() => {

                        }}>Assistir Trailer</button>
                    </li>
                </ul>
            </li>
        </ul>
    )
}