import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function Todoitem({ todo }) {
  return (
    <div className={StyleSheet.item}>
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
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
