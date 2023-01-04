import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Box from '@mui/material/Box';
import './App.css';

export default function App() {

  return (
    <Box>
      <QueryClientProvider client={new QueryClient()}>
        <Header />
      </QueryClientProvider>
      <QueryClientProvider client={new QueryClient()}>
        <TaskList />
      </QueryClientProvider>
    </Box>
  )
}
