import Body from "../../components/body";
import Header from "../../components/Header";
import {useThemeUtils} from "../../utils/ThemeUtils";
import Banner from "./components/Banner";

export default function Home() {
    const themeUtils = useThemeUtils()
    return (
        <>
            <Header themeUtils={themeUtils} />
            <Body themeUtils={themeUtils}>
                <Banner/>
            </Body>
        </>
    )
}