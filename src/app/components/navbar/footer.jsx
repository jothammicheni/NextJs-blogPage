import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
           <h1>Logo</h1>
        </div>
        <div className={styles.text}>
          <p>blogpage@copyright 2024</p>
        </div>
    </div>
  )
}

export default Footer
