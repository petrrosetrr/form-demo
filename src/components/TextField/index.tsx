import React from 'react';
import cn from "classnames";
import styles from './index.module.scss';
import {useField} from 'formik';

interface IProps {
    name: string;
    label: string;
    as?: string;
    className?: string;
    required?: boolean;
    [key: string]: any;
}

const TextField: React.FC<IProps> = ({
                                         as = '',
                                         className,
                                         label,
                                         required = false,
                                         children,
                                         name,
                                         ...rest }) => {
    const [field, meta] = useField(name);

    return (
        <label className={cn(styles.main, className)}>
            <span>{label} {required && <span className={styles.asterisk}>*</span>}</span>
            {
                as === 'select' ?
                <select className={cn(styles.input, {[styles.error]: meta.error && meta.touched})} {...rest} {...field}>
                    {children}
                </select>
                :
                <input className={cn(styles.input, {[styles.error]: meta.error && meta.touched})} {...rest} {...field}/>
            }
            <div className={styles.error_hint}>
                {
                    meta.error && meta.touched && meta.error
                }
            </div>
        </label>
    );
};

export default TextField;
