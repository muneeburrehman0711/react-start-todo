import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function Todoitem({ todo }) {
  function handleDelete(e) {
    console.log(e.target);
  }
  function handleEdit(e) {
    console.log(e.target);
  }
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
      <div className={styles.todoActions}>
        <div className={styles.icon}>
          <MdDelete
            onClick={(e) => {
              handleDelete(e);
            }}
          />
        </div>
        <div className={styles.icon}>
          <MdEdit
            onClick={(e) => {
              handleEdit(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
