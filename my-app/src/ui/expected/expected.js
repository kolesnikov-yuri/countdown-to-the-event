import React from 'react';

import cx from 'clsx';

import styles from './expected.module.css';

/*eslint-disable react/prop-types */

function Expected ({ className, children }) {
    return (
        <div className={cx(styles['expected'], className)}>
              <p>ожидается в <span>{children}</span></p>
            </div>
    );
}

export {Expected}