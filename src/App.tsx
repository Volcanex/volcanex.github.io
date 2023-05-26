import React from 'react';
import Firework from './components/firework/firework';
import styles from './App.module.scss';
import '@fontsource/space-grotesk';
import Ableton from './components/ableton/ableton';

const App = () => {
    return (
        <div className={styles.App}>
            <div className={styles['firework-wrapper']}>
                <Firework />
            </div>
            <div className={styles['overlay-content']}>
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1em' }}>
                    Happy Birthday from everyone!
                </h2>
                
                <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '5em', color: 'white' }}>
                    Keskesay.co.uk
                </h1>
                

                <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2em' }}>AND</h1>

                <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '4em', color: 'lightblue'}}>
                    Ableton Wavetable
                </h1>
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1em' }}>
                    
                </h2>
                <Ableton />
            </div>
        </div>
    );
};

export default App;
