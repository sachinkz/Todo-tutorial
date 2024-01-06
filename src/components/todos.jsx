import React from 'react'
import styles from '../styles/input.module.css'


const Todos = (props) => {


const changeStatus=(index)=>{
  const newArr=[...props.todos]
  newArr[index].isCompleted=true;
  props.setTodos(newArr);
}


  return (
    <div className={styles.todos}>
      {props.todos.map((todo, index) => (


        <div key={index} className={styles.listItem}>
          <input onChange={()=>changeStatus(index)} type="checkbox" />
          <p className={todo.isCompleted===true ? styles.todoContent : styles.todoUncomplete}>{todo.content}</p>
          <button className={styles.dltBtn}>Delete</button>
        </div>


      ))}
    </div>
  )
}

export default Todos