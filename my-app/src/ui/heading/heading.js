import React from 'react';

import cx from 'clsx';

import styles from './heading.module.css';

/*eslint-disable react/prop-types */

function Heading ({ className, children }) {
    return (
        <div className={cx(styles['heading'], className)}>
            <h1>{children}</h1>
        </div>
    );
}

export {Heading}