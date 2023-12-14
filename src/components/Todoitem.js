import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlice';

function Todoitem({ todo }) {
  const dispatch = useDispatch();
  function handleDelete(e) {
    console.log('id', todo.id);

    dispatch(deleteTodo({ id: todo.id }));
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
