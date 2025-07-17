export default function getResourceImage(age) {
    let base = "./assets/a"
    if (`${age}` === "0" || !["10", "12", "14", "16", "18"].includes(`${age}`)) {
        return `${base}0.png`
    }

    return `${base}${age}.png`
}