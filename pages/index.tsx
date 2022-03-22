import {Title, Text, Anchor} from '@mantine/core';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {BouncyText} from '../components/KeyFrame'
import {HeaderSimple} from '../components/HeaderSimple/HeaderSimple'

export default function HomePage() {
    return (
        <>
            <Title sx={{fontSize: "xxx-large", fontWeight: 900, letterSpacing: -2}} align="center" mt={100}>
                Hello! I'm{' '} <BouncyText name={"Alexander Lazar"}/>
            </Title>
            <Text color="dimmed" align="center" size="lg" sx={{maxWidth: 580}} mx="auto" mt="xl">
                Hey, I'm a Software Engineer at Capital One. This blog is somewhere for me to collect my thoughts and document them for myself and others.
            </Text>
        </>
    );
}
