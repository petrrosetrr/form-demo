import React from 'react';
import styles from './index.module.scss';
import cn from "classnames";
import { Field } from 'formik';

interface IProps {
    name: string;
    className?: string;
    label: string;
    [key: string]: any
}

const Checkbox: React.FC<IProps> = ({label, className, name, ...rest}) => {
    return (
        <div className={cn(styles.main, className)}>
            <Field className={styles.input} name={name} type='checkbox' id={name}/>
            <label className={styles.label} htmlFor={name}>{label}</label>
        </div>
    );
};

export default Checkbox;
