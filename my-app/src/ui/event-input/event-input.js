import React from 'react';

import cx from 'clsx';

import styles from './event-input.module.css';

/*eslint-disable react/prop-types */

function EventInput ({ type, className, children, value }) {
    return (
        <div className={cx(styles['event_input'])}>
            <p>{children}</p>
            <input
             type={type}
             className={cx(styles['input_menu'], className)}
             value={value} >
            </input>
        </div>
    );
}

export {EventInput}