import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { TaskService } from '../service/TaskService';

export default function Header() {

    const handleFilterTasks = () => {
       alert('filtra as tarefas pelo status selecionado')
    };

    const { isLoading, error, data } = new TaskService().getTaskCounters()

    if (isLoading) return <h1>Loading TaskCounters...</h1>

    if (error) return <h1>An error has occurred</h1>

    const menuItens = [`📝 ${data.qntTasks} `, ` ✔️ ${data.qntDoneTasks} `, ` ❌ ${data.qntNotDoneTasks} `];

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        COMEIA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                        {menuItens.map((page) => (
                            <Button
                                key={page}
                                onClick={handleFilterTasks}
                                sx={{ my: 2, color: 'white', display: 'block',  fontSize: '15px', fontWeight: 600 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
