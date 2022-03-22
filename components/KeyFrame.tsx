import { createStyles, keyframes } from '@mantine/core';
import React from "react";


// Export animation to reuse it in other components
export const bounce = keyframes({
    'from, to': { transform: 'translate3d(0, 0px, 0)' },
    '10%': { transform: 'translate3d(00px, -5px, 0)' },
    '20%': { transform: 'translate3d(00px, +5px, 0)' },
    '30%': { transform: 'translate3d(00px, -5px, 0)' },
    '40%': { transform: 'translate3d(00px, +5px, 0)' },
    '50%': { transform: 'translate3d(00px, -5px, 0)' },
    '60%': { transform: 'translate3d(00px, +5px, 0)' },
    '70%': { transform: 'translate3d(00px, -5px, 0)' },
    '80%': { transform: 'translate3d(00px, +5px, 0)' },
    '90%': { transform: 'translate3d(00px, -5px, 0)' },
});

const useStyles = createStyles((theme) => ({
    container: {
        color: "green",
        textAlign: 'center',
        padding: theme.spacing.lg,
        animation: `${bounce} 3s ease-in-out infinite`,
        fontSize: "xxx-large",
    },
    outerDiv: {

    }
}));

interface props {
    text: string,
}

export function BouncyText({name}){
    const { classes } = useStyles();
    return <div className={classes.container}>{name}</div>
}

