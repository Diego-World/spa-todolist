import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import dateFormat from "dateformat";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TaskOptionsButton from './TaskOptionsButton';
import CreateTaskDialog from './CreateTaskDialog';
import { TaskService } from '../service/TaskService';

export default function TaskList() {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const [openTaskCreateDialog, setOpenTaskCreateDialog] = React.useState(false);
  
    const handleOpenTaskCreateDialog = () => {
      setOpenTaskCreateDialog(true)
  
    };
    const handleCloseTaskCreateDialog = () => {
      setOpenTaskCreateDialog(false)
    };

    const { isLoading, error, data } = new TaskService().getAllTasks();

    if (isLoading) { return <h1>Loading TaskList...</h1> }

    if (error) return <h1>An error has occurred</h1>

    return (
        <Container>
            <Paper sx={{ width: '100%', maxWidth: '100%', marginTop: '5%' }} elevation={3} square>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography
                            noWrap
                            gutterBottom
                            variant="h5"
                            component="a"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                padding: '12px',
                                color: '#344d66',
                                fontWeight: '600',
                                textDecoration: 'none',
                                ml: 1,
                                mt: 1
                            }}
                        >
                            Tarefas
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CreateTaskDialog open={openTaskCreateDialog} close={handleCloseTaskCreateDialog} btnClick={handleOpenTaskCreateDialog}/>
                    </Grid>
                </Grid>

                <Divider variant="middle" />
                <List>
                    {data.content.map((task) => {
                        const labelId = `checkbox-list-label-${task.id}`;
                        let taskId = task.id;
                        let dateToDoTask = dateFormat(new Date(task.dateToDoTask), "dd/mm/yyyy");
                        let taskDescription = task.description;
                        let taskDoneStatus = displayTaskDoneStatus(task.taskDoneStatus);
                        let taskCreatedAt = dateFormat(new Date(task.createdAt), "dd/mm/yyyy hh:MM:ss");;

                        return (

                            <ListItem
                                key={taskId}
                                secondaryAction={
                                    <TaskOptionsButton />
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(taskId)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(taskId) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${taskDoneStatus} ${taskId} ${dateToDoTask} - ${taskDescription}`} secondary={`Criada em ${taskCreatedAt}`} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        </Container>
    );
}

function displayTaskDoneStatus(value: number) {
    switch (value) {
        case 0:
            return '❌';
        case 1:
            return '✔️';
    }
};
