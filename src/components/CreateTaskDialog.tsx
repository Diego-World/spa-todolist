import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TaskDatePicker from './TaskDatePicker';
import TaskDoneStatusSwitch from './TaskDoneStatusSwitch';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import axios from "axios";

const baseURL = "http://localhost:8080/api/todolist/task";

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 1, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function CreateTaskDialog({ open, close, btnClick }) {

    const [description, setDescription] = React.useState('');
    const [taskDoneStatus, setTaskDoneStatus] = React.useState('');
    const [dateToDoTask, setDateToDoTask] = React.useState('');

    function createTask() {
        axios
            .post(baseURL, {
                dateToDoTask: '2017-05-24',
                description: description,
                taskDoneStatus: 1
            })
            .then((response) => {
                window.location.reload(false);
            });


    }

    return (
        <>
            <IconButton color="primary" onClick={btnClick} sx={{ mr: 2 }} size={'medium'}>
                <PlusOneIcon fontSize={'large'} />
            </IconButton>
            <Dialog open={open} onClose={close}>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
                    Criar Tarefa
                </BootstrapDialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 3 }}>
                        Informações da tarefa
                    </DialogContentText>
                    <Grid container spacing={4}>
                        <Grid item xs={5}>
                            <TaskDatePicker />
                        </Grid>
                        <Grid item>
                            <TaskDoneStatusSwitch/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{
                                    shrink: true
                                }}
                                id="myField"
                                label="Descrição"
                                placeholder="Objetivo da minha tarefa é ..."
                                multiline
                                rows={5}
                                fullWidth
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ fontWeight: 'bold' }} onClick={createTask} size="medium">Enviar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
