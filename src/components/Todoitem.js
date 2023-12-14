import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function Todoitem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [ ]
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === 'complete' && styles['todoText--completed'],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>{todo.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
