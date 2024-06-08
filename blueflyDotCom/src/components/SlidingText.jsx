import React from 'react';

const ContinuousSlidingText = () => {
    return (
        <div style={styles.container}>
            <div style={styles.slidingText}>
                Free Standard Shipping And Handling
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100px',
        border: '1px solid #000',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slidingText: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        animation: 'slide 10s linear infinite',
        fontWeight:'bold',
    },
    '@keyframes slide': {
        '0%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
    },
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes slide {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
`, styleSheet.cssRules.length);

export default ContinuousSlidingText;
