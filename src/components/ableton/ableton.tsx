import React from 'react';
import classNames from 'classnames';
import styles from './ableton.module.scss';

export interface AbletonProps {
    className?: string;
}

const Ableton: React.FC<AbletonProps> = ({ className }) => {
    const rootClasses = classNames(styles.root, className);

    return (
        <div className={rootClasses}>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} role="button">
                    Download plugin
                </button>
                <button className={styles.button} role="button">
                    Wavetable sample pack
                </button>
                <button className={styles.button} role="button">
                    Domain hub
                </button>
            </div>
        </div>
    );
};

export default Ableton;
