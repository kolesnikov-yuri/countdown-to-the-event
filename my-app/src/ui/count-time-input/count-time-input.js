import React from 'react';

import cx from 'clsx';

import styles from './count-time-input.module.css';

/*eslint-disable react/prop-types */

function CountTimeInput ({ type, className, children }) {
    return (
        <div className={cx(styles['count_time'])}>
            <p>{children}</p>
            <input
             type={type}
             className={cx(styles['input_menu'], className)} >
            </input>
        </div>
    );
}

export {CountTimeInput}