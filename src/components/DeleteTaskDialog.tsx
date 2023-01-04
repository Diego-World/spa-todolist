import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteTaskDialog({open, close}) {

  return (
    <Dialog open={open} onClose={close}>
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que quer deletar essa tarefa?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tarefas deletadas não podem ser recuperadas, deseja
            excluir mesmo assim?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Sim</Button>
          <Button onClick={close}>Não</Button>
        </DialogActions>
    </Dialog>
  );
}