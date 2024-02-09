import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

function About() {
  return (
    <div className={styles.container}>
       <div className={styles.textContainer}>
         <h1 className={styles.header}>
           About agency
         </h1>
         <h1 className={styles.desc1}>
         If you're fetching images from external sources, ensure that the server supports Cross-Origin Resource Sharing (CORS) to allow your Next.js application to access the images.
         </h1>
         <p className={styles.desc2}>
         If you're fetching images from external sources, ensure that the server supports Cross-Origin Resource Sharing (CORS) to allow your Next.js application to access the images.
         </p>

         <div className={styles.feeds}>
         <div className={styles.fans}>
         <h1 className={styles.fanNumber}>1000K+</h1>
             <p className={styles.fanDesc}>Year of experience </p>
          </div>
          <div className={styles.fans}>
             <h1 className={styles.fanNumber}>250K+</h1>
             <p className={styles.fanDesc}>People reached</p>
          </div>
          <div className={styles.fans}>
          <h1 className={styles.fanNumber}>5K+</h1>
             <p className={styles.fanDesc}>Services and plugins</p>
          </div>
         </div>
       </div>
       <div className={styles.imageContainer}>
          <Image src='/about.png' alt='Brands Image' width={500} height={500}  className={styles.img}/>
      </div>
    </div>
  )
}

export default About
