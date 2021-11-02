import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface IProps {
    className?: string;
    [key: string]: any;
}

const Container: React.FC<IProps> = ({children, className, ...rest}) => {
    return (
        <div className={cn(styles.main, className)} {...rest}>
            {children}
        </div>
    );
};

export default Container;
