import React from 'react';

import cx from 'clsx';

import styles from './remained-time.module.css';

/*eslint-disable react/prop-types */

function RemainedTime ({ className, children }) {
    return (
        <div className={cx(styles['remained_time'], className)}>
              
                <div className={cx(styles['title'])}>Осталось:</div>
                <div className={cx(styles['timer'])}>
                    <div className={cx(styles['timer_block'])}>
                        <span id="days">12</span>
                        <p className={cx(styles['time_elem'])}>{children}</p>
                    </div>
                </div>
            
            </div>
    );
}

export {RemainedTime}