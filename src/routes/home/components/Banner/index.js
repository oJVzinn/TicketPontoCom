import Container from "../../../../components/Container";
import BannerFilm from "../BannerFilm";
import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <Container height="100%" width="100%">
            <ul className={styles.carousel}>
                <BannerFilm filmAgeIndication="10" filmCategory="Ação, Aventura..." filmDuration="2h 05m" filmDesc="Sexo intensivo entre dragoes"/>
                <BannerFilm filmAgeIndication="0" filmCategory="Ação, Aventura..." filmDuration="2h 05m" filmDesc="Sexo intensivo entre dragoes"/>
                <BannerFilm filmAgeIndication="18" filmCategory="Ação, Aventura..." filmDuration="2h 05m" filmDesc="Sexo intensivo entre dragoes"/>
            </ul>
        </Container>
    )
}