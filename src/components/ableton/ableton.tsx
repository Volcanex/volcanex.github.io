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
                <a href="https://www.ableton.com/en/account/" target="_blank" rel="noreferrer noopener" className={classNames(styles.button, styles.link)} role="button">
                    Download plugin
                </a>
                <a href="https://transactions.sendowl.com/orders/126459962/download/392c92058e44d2e9f4c9779d3d21a389" target="_blank" rel="noreferrer noopener" className={classNames(styles.button, styles.link)} role="button">
                    Wavetable pack
                </a>
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S889942362%3A1685108317532392&continue=https%3A%2F%2Fdomains.google.com%2Fregistrar%3Finternal_linking%3Dtrue&hl=en&ifkv=Af_xneF324DngygjnABiJ8unvj8FaV5qLXnFoiadCgfZXxZGGPPTy5eIJrn_YqNHkYREOLkQnXkwkg&passive=true&service=domains&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noreferrer noopener" className={classNames(styles.button, styles.link)} role="button">
                    Domains website
                </a>
            </div>
        </div>
    );
};

export default Ableton;
