import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <MdOutlineClose />
        </div>
        <form>
          <h1 className={styles.formTitle}>Add Task</h1>
        </form>
        <h1> this is from modal </h1>
      </div>
    </div>
  );
}

export default TodoModal;
