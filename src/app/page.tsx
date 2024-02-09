import Image from "next/image";
import styles from './home.module.css'
export default function Home() {
  return (
    <main className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thought Agency</h1>
          <p className={styles.desc}>
          you plan to fetch remote images. Additionally, consider checking the terms of service of the external website to ensure that you have the right to use their images in your application.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Learn more </button>
            <button className={styles.button}>Contacts </button>
          </div>
          <div className={styles.brands}>
            <Image src='/brands.png' alt="brands" fill className={styles.brands}/>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src='/hero.gif' width={100} height={100} alt="" className={styles.gifImage} />
        </div>
    </main>
  );
}
