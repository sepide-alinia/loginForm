
import React, { useState } from 'react'
import styles from "./loginSignUp.module.css"
import email from "../assets/email.png"
import password from "../assets/password.png"
import person from "../assets/person.png"


export default function LoginSignUp(){

const [action , setAction] = useState("Login")

  return (<div className={styles.body}>
    <div className={styles.cntr}>
        <div className={styles.header}>
            <div className={styles.text}>{action}</div>
        </div>
        <div className={styles.inputs}>
            <div className={styles.input}>
                <img src={person} alt="person" />
                <input placeholder="Name" type="text" />
            </div>
            {action==="Sign Up" ? 
               <div className={styles.input}>
               <img src={email} alt="email" />
               <input placeholder="email" type="email" />
           </div>
           : null}
         
            <div className={styles.input}>
                <img src={password} alt="password" />
                <input placeholder="password" type="password" />
            </div>
        </div>
        {action === "Login" ? 
                <div className={styles.forgot}>Lost Password?<span>Click Here</span></div>
                : null

        }
        <div className={styles.submitCntr }>
            <div className={action === "Login" ? `${styles.submit} ${styles.gray}` : `${styles.submit}`}onClick={()=>setAction("Sign Up") }>Sign Up</div>
            <div className={action === "Sign Up" ?`${styles.submit} ${styles.gray}` : `${styles.submit}` } onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
    </div>
  )
}
