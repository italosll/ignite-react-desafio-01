import iconClipboard from "../assets/iconClipboard.png";

import styles from "./WarningEmptyList.module.css";

function WarningEmptyList() {
  return (
    <div className={styles.container}>
      <img src={iconClipboard} alt={"icon clipboard"} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export { WarningEmptyList };
