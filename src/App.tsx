import { ChangeEvent, FormEvent, useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import todoLogo from "./assets/Logo.svg";
import iconAdd from "./assets/iconAdd.svg";
import { Task } from "./components/Task";
import { WarningEmptyList } from "./components/WarningEmptyList";
interface ITask {
  id: string;
  description: string;
  isFinished: boolean;
}
function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task) => task.isFinished).length;
  const amountTasks = tasks.length;

  const onToggleCompletedTask = (idToComplete: string) => {
    const taskToUpdate: ITask | undefined = tasks.find(
      (task) => task.id === idToComplete
    );

    const tasksWithoutUpdatedOne: ITask[] = tasks.filter(
      (task) => task.id !== idToComplete
    );

    const updatedTask: ITask = {
      ...taskToUpdate,
      isFinished: !taskToUpdate?.isFinished,
    } as ITask;

    let updatedTasksArray: ITask[] = tasksWithoutUpdatedOne;

    if (updatedTask.isFinished) {
      updatedTasksArray.push(updatedTask);
    } else {
      updatedTasksArray.unshift(updatedTask);
    }

    setTasks(updatedTasksArray);
  };

  const onDeleteTask = (idToDelete: string) => {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.id !== idToDelete
    );
    setTasks(tasksWithoutDeletedOne);
  };

  const onCreateTask = (description: string) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        id: tasks?.length.toString(),
        description: description,
        isFinished: false,
      },
    ]);
  };

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  };

  const handleNewTaskInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Este campo é obrigatório");
  };

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();
    onCreateTask(newTask);
    setNewTask("");
  };

  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logo" />
      </header>
      <main>
        <form onSubmit={handleNewTask}>
          <input
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            placeholder="Adicione aqui uma nova tarefa"
          />
          <button type="submit">
            Criar
            <img src={iconAdd} />
          </button>
        </form>

        <p>
          <span> Tarefas criadas </span>
          <span>{tasks?.length}</span>

          <span> Concluídas </span>
          <span>
            {completedTasks
              ? `${completedTasks} de ${amountTasks}`
              : completedTasks}
          </span>
        </p>
        {amountTasks > 0 ? (
          <div className={styles.tasksList}>
            {tasks?.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isFinished={task.isFinished}
                onToggleCompletedTask={onToggleCompletedTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </div>
        ) : (
          <WarningEmptyList />
        )}
      </main>
    </>
  );
}

export default App;
