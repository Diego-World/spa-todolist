import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TaskDatePicker from './TaskDatePicker';
import TaskDoneStatusSwitch from './TaskDoneStatusSwitch';
import TaskCreatedAtDate from './TaskCreatedAtDate';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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


export default function EditTaskDialog({ open, close }) {
  const test = () => {
    //const { isLoading, error, data } = new TaskService().getTaskById('f3053834-ba53-4fe0-a3a1-2792da2c5e82');

    //if (isLoading) return <h1>Loading TaskCounters...</h1>

    //if (error) return <h1>An error has occurred</h1>

    console.log('as')
  };
  return (
  
    <Dialog open={open} onClose={close}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
        Editar
      </BootstrapDialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Informações da tarefa
        </DialogContentText>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField InputLabelProps={{ shrink: true }}
              id="name"
              label="UUID"
              fullWidth
              value="db319d36-81d2-4db0-93fa-5a51fd97da32"
              disabled
            />
          </Grid>
          <Grid item xs={8}>
            <TaskCreatedAtDate />
          </Grid>
          <Grid item xs={5}>
            <TaskDatePicker />
          </Grid>
          <Grid item>
            <TaskDoneStatusSwitch />
          </Grid>
          <Grid item xs={12}>
            <TextField InputLabelProps={{ shrink: true }}
              id="name"
              label="Descrição"
              placeholder="Objetivo da minha tarefa é ..."
              multiline
              rows={4}
              fullWidth
              maxRows={5}
              minRows={3}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button sx={{ fontWeight: 'bold' }} onClick={test} size="medium">Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}