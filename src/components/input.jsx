import React from 'react'
import styles from '../styles/input.module.css'

const Input = (props) => {


    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>My Todos</h1>
            <div className={styles.box}>
                <input onChange={(e)=>props.setInputValue(e.target.value)}  className={styles.inp} type="text" />
                <button onClick={()=>props.setTodos((prev)=>[...prev,{content:props.inputValue,isCompleted:false}])} className={styles.btn}>Save</button>
            </div>
        </div>
    )
}

export default Input