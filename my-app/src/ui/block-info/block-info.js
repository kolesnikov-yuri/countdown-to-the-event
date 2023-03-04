import React from 'react';

import cx from 'clsx';

import styles from './block-info.module.css';

/*eslint-disable react/prop-types */

function BlockInfo ({ className }) {
    return (
        <div className={cx(styles['block-info'], className)}></div>
    );
}

export {BlockInfo}