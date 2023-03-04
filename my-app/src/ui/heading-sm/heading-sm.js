import React from 'react';

import cx from 'clsx';

import styles from './heading-sm.module.css';

/*eslint-disable react/prop-types */

function HeadingSm ({ className, children }) {
    return (
        <div className={cx(styles['heading_sm'], className)}>
            <span>{children}</span>
        </div>
    );
}

export {HeadingSm}