import React from 'react';
import cn from "classnames";
import styles from './index.module.scss';
import {useField} from 'formik';
import {validationSchema} from "../TicketsForm";

interface IProps {
    name: string;
    label: string;
    select?: boolean;
    className?: string;
    required?: boolean;
    [key: string]: any;
}

const TextField: React.FC<IProps> = ({
                                         select= false,
                                         className,
                                         label,
                                         required = false,
                                         children,
                                         ...rest }) => {
    const {name} = rest;
    const [field, meta] = useField(rest);
    return (
        <label className={cn(styles.main, className)}>
            <span>{label} {required && <span className={styles.asterisk}>*</span>}</span>
            {
                select ?
                <select className={cn(styles.input, {[styles.error]: meta.error && meta.touched})} {...field} >
                    {children}
                </select>
                :
                <input className={cn(styles.input, {[styles.error]: meta.error && meta.touched})} {...field} />
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
