import React, { useState } from 'react'
import Input from '../components/input'
import styles from '../styles/main.module.css'
import Todos from '../components/todos'

const Main = () => {

  const [inputValue,setInputValue]=useState("");
  const [todos,setTodos]=useState([])

  return (
    <div className={styles.main}>
        <Input inputValue={inputValue} setTodos={setTodos} setInputValue={setInputValue} />
        <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Main