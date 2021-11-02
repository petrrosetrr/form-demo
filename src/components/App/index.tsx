import React from 'react';
import styles from './index.module.scss';
import TicketsForm from "../TicketsForm";
import Container from "../Container";
import {ReactComponent as RZD} from "./RZD.svg";

const App: React.FC = () => {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <Container>
                    <RZD className={styles.logo} />
                </Container>
            </header>
            <Container className={styles.container}>
                <TicketsForm />
            </Container>
        </div>
    )
}

export default App;
