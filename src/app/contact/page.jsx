import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'
function Contact() {
  return (
    <div>
        <div className={styles.imageContainer}>
        <Image src='https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg' alt='' fill />
        </div>
    </div>
  )
}

export default Contact
