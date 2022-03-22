import {Title, Text, Anchor} from '@mantine/core';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {BouncyText} from '../components/KeyFrame'
import {HeaderSimple} from '../components/HeaderSimple/HeaderSimple'

export default function Snippets() {
    return (
        <>
            <Title sx={{fontSize: "xxx-large", fontWeight: 900, letterSpacing: -2}} align="center" mt={10}>
                <BouncyText name={"Snippets"} color={"green"}/>
            </Title>
        </>
    );
}
