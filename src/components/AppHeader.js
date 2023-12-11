import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <h1> hello from header</h1>
      <Button variant="primary">Add Task</Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">InComplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal />
    </div>
  );
}

export default AppHeader;
