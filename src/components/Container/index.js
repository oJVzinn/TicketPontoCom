import styles from "./Container.module.css"
import {useEffect} from "react";

export default function Container( {bg, width, height, direction, justify, align, children, gap} ) {
    useEffect(()=> {
        document.querySelectorAll(`.${styles.Container}`).forEach( (element) => {
            let style = element.style
            style.height = `${height}`
            style.width = `${width}`
            style.background = `${bg}`
            style.flexDirection = `${direction}`
            style.justifyContent = `${justify}`
            style.alignItems = align
            style.gap = gap
        })
    }, [align, bg, direction, gap, height, justify, width])

    return (
        <section className={styles.Container}>
            {children}
        </section>
    )
}