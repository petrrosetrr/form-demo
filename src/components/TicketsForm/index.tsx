import {Formik, Form, FieldArray, Field, ErrorMessage, withFormik, useFormik, FormikHelpers} from 'formik';
import React, {useCallback, useEffect} from 'react';
import Fieldset from "../Fieldset";
import styles from './index.module.scss';
import * as Yup from 'yup';
import Fade from "../Fade";
import cn from "classnames";
import axios from "axios";

export interface IPassenger {
    snils: string;
    name: string;
    surname: string;
    patronymic: string;
    gender: string;
    dateOfBirth: string;
    citizenship: string;
    idNumber: string;
    emergencyNotifications: boolean;
    phoneNumber: string;
    email: string;
}

interface IForm {
    passengers: Array<IPassenger>;
}

const createPassenger = () => ({
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    dateOfBirth: '',
    citizenship: '',
    idNumber: '',
    emergencyNotifications: true,
    phoneNumber: '',
    email: '',
    snils: ''
});

const initialValues: IForm = {
    passengers: [createPassenger()]
}

export const validationSchema = Yup.object().shape({
    passengers: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Обязательное поле'),
            surname: Yup.string().required('Обязательное поле'),
            patronymic: Yup.string().required('Обязательное поле'),
            gender: Yup.string().required('Обязательное поле'),
            dateOfBirth: Yup.string().required('Обязательное поле'),
            citizenship: Yup.string().required('Обязательное поле'),
            idNumber: Yup.string().required('Обязательное поле'),
            emergencyNotifications: Yup.boolean().required().required('Обязательное поле'),
            email: Yup.string().email(),
            snils: Yup.string().matches(/^[0-9]+$/)
        })),
});

const TicketsForm = () => {

    const submitHandler = useCallback(async (formData: IForm, helpers: FormikHelpers<IForm>) => {
        try {
            await axios.post('https://webhook.site/d50f48dc-3a5b-4228-b600-8998aec0c130', formData);
            helpers.resetForm();
        }
        catch (error) {

        }
    }, []);
    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
            {
                ({values, errors, touched, resetForm, isSubmitting}) => (

                    <Form className={cn(styles.main, {[styles.disabled]: isSubmitting})}>
                        <FieldArray name='passengers'>
                            {
                                ({push, remove}) => (
                                    <>
                                        {
                                            values.passengers.map((passenger, index) => (
                                                <Fade show={true} key={index}>
                                                    <Fieldset
                                                        key={index}
                                                        passenger={passenger}
                                                        remove={() => remove(index)}
                                                        index={index}/>
                                                </Fade>
                                            ))
                                        }
                                        <div className={styles.buttons}>
                                            <button
                                                type='button'
                                                className={styles.button}
                                                onClick={() => {
                                                    push(createPassenger())
                                                    setTimeout(() => window.scrollTo({behavior: 'smooth', top: document.body.scrollHeight}));
                                                }}>
                                                Добавить пассажира
                                            </button>
                                            {
                                                !!values.passengers.length &&
                                                <button className={styles.submit} type='submit'>Отправить форму</button>
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </FieldArray>
                    </Form>
                )
            }
        </Formik>
    )
};

export default TicketsForm;
