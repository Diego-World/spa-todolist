import { useQuery } from 'react-query';

export class TaskService {

    public getAllTasks() {
        return useQuery('taskRepository', () =>
            fetch('http://localhost:8080/api/todolist/task/all').then(res =>
                res.json()
            )
        )
    }

    public getTaskCounters() {
        return useQuery('taskRepository', () =>
            fetch('http://localhost:8080/api/todolist/task/counters').then(res =>
                res.json()
            )
        )
    }

    public getTaskById(taskId: String) {
        return useQuery('taskRepository', () =>
            fetch('http://localhost:8080/api/todolist/task/'+taskId).then(res =>
                res.json()
            )
        )
    }
}