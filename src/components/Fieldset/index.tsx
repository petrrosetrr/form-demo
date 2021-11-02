import React from 'react';
import {IPassenger} from "../TicketsForm";
import styles from './index.module.scss';
import TextField from "../TextField";
import Checkbox from "../Checkbox";
import Fade from "../Fade";

interface IProps {
    passenger: IPassenger;
    remove: () => void;
    index: number;
}

const Fieldset: React.FC<IProps> = ({remove, index, passenger}) => {
    return (
        <fieldset className={styles.main}>
            <div className={styles.header}>
                <legend className={styles.legend}>Пассажир №{index + 1}</legend>
                <button className={styles.remove} onClick={remove}>Удалить пассажира</button>
            </div>
            <div className={styles.info}>
                <TextField label={'Имя:'} name={`passengers[${index}].name`} required/>
                <TextField label={'Фамилия:'} name={`passengers[${index}].surname`} required/>
                <TextField label={'Отчество:'} name={`passengers[${index}].patronymic`} required/>
                <TextField label={'Пол:'} name={`passengers[${index}].gender`}  as='select' required>
                    <option value='' selected disabled hidden>Не выбрано</option>
                    <option value='male'>Мужской</option>
                    <option value='female'>Женский</option>
                </TextField>
                <TextField label={'Дата рождения:'} name={`passengers[${index}].dateOfBirth`} type='date' required/>
                <TextField label={'Гражданство:'} name={`passengers[${index}].citizenship`} as='select' required>
                    <option value='' selected disabled hidden>Не выбрано</option>
                    <option value='Russia'>Россия</option>
                    <option value='Other'>Другоe</option>
                </TextField>
                <TextField label={'Номер документа'} name={`passengers[${index}].idNumber`} type={'number'} required/>
                <TextField label={'Снилс:'} name={`passengers[${index}].snils`} type='number'/>
                <Checkbox
                    label={'Согласен на получение уведомлений'}
                    name={`passengers[${index}].emergencyNotifications`}
                    className={styles.emergency}/>
                <Fade show={passenger.emergencyNotifications} className={styles.additional}>
                    <p className={styles.text}>
                        Если вы хотите получать оповещения...
                    </p>
                    <TextField label={'Email:'} name={`passengers[${index}].email`}/>
                    <TextField label={'Телефон:'} name={`passengers[${index}].phoneNumber`}/>
                </Fade>
            </div>
        </fieldset>
    );
};

export default Fieldset;
