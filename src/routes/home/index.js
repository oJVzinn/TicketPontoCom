import Body from "../../components/body";
import Header from "../../components/Header";
import {useThemeUtils} from "../../utils/ThemeUtils";

export default function Home() {
    const themeUtils = useThemeUtils()
    const sexo = [];
    for (let i = 0; i < 100; i++) {
        sexo.push(i)
    }

    return (
        <>
            <Header themeUtils={themeUtils} />
            <Body themeUtils={themeUtils}>
                {
                    sexo.map((item) => {
                        return (
                            item
                        )
                    })
                }
            </Body>
        </>
    )
}