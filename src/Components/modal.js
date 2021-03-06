import React from 'react';
import styles from '../App.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, CardContent, TextField } from '@material-ui/core';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        color: "black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: '2px solid #000',
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title" className={styles.modalTitle}>¡Queremos conocerte!</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <div className={styles.hireForm}>
                <div >
                    <TextField  className="textInputt" id="outlined-basic" label="Correo Electronico" variant="outlined" />
                </div>

                <div className="textInputt">
                    <TextField id="outlined-basic" label="Carrera" variant="outlined" />

                </div>

                <div className="textInputt">
                    <TextField id="outlined-basic" label="Carrera" variant="outlined" />
                </div>

            </div>

        </div>
    );

    return (
        <div>
            <Button style={{
                border: "1px solid lightgreen",
                color: "lightgreen",
                fontSize: "1.2rem"
            }} variant="outlined" color="primary"
                onClick={handleOpen}>
                ¡Quiero ser parte!
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
