import axios from "axios";
import { TodoistApi } from "@doist/todoist-api-typescript"
require('dotenv').config();

const api = new TodoistApi(process.env.TODOISTKEY)
const TODO_API = 'https://api.todoist.com/rest/v1/tasks'
const TODOIST_TOKEN = process.env.TODOISTKEY
const PROJECT_ID = 'your project id'

api.getProjects()
    .then((projects) => console.log(projects))
    .catch((error) => console.log(error))


class TaskService {
    static async getAllTasks(){
        api.getProjects()
        .then((projects) => console.log(projects))
        .catch((error) => console.log(error))
    }   
    static async getTaskById(id){
        // ваша реализация получения одной тудушки
        try {
            const task = await api.getTask(id);
            return task;
          } catch (error) {
            return error;
          }
          
    }   
    static async createNewTask(task){
        // ваша реализация создания новой тудушки
        try {
            const addedTask = await api.addTask({
              content: task,
            });
            return addedTask;
          } catch (error) {
            return error;
          }
          
    }
    static async updateNewTask(id, task){
        // ваша реализация обновления существующей тудушки по ID
        try {
            const isSuccess = await api.updateTask(id, { content: task });
            return isSuccess;
          } catch (error) {
            return error;
          }
          
    }
    static async deleteNewTask(id){
        // ваша реализация удаления существующей тудушки по ID
        try {
            const isSuccess = await api.deleteProject(id);
            return isSuccess;
          } catch (error) {
            return error;
          }
          
    }
}

export default TaskService;