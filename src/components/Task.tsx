import iconChecked from "../assets/iconChecked.svg";
import iconTrash from "../assets/iconTrash.svg";
import iconCheck from "../assets/iconCheck.svg";

import styles from "./Task.module.css";

interface ITask {
  id: string;
  onDeleteTask?: any;
  onToggleCompletedTask: (id: string) => void;
  description?: string;
  isFinished?: boolean;
}

function Task({
  id,
  onDeleteTask,
  onToggleCompletedTask,
  description,
  isFinished,
}: ITask) {
  return (
    <div className={styles.container}>
      <img
        src={isFinished ? iconChecked : iconCheck}
        alt="Logo"
        onClick={() => {
          onToggleCompletedTask(id);
        }}
      />
      <p
        className={
          isFinished ? styles.taskFinishedDescription : styles.taskDescription
        }
      >
        {description}
      </p>
      <img
        src={iconTrash}
        alt="Logo"
        onClick={() => {
          onDeleteTask(id);
        }}
      />
    </div>
  );
}

export { Task };
