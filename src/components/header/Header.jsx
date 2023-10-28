import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <section className='layer'>
      <div className={styles.layers__container}>
        <div className={`${styles.layer__item} ${styles.layerFirst}`}></div>
        <div className={`${styles.layer__item} ${styles.layerSecond}`}></div>
        <div className={`${styles.layer__item} ${styles.layerThird}`}>
          <div className="hero-content">
            <h1 className={styles.g}>AVIA</h1>
            <div className='hero-content__p'>use our application</div>
          </div>
        </div>
        <div className={`${styles.layer__item} ${styles.layerFourth}`}>
          <canvas className='rain'></canvas>
        </div>
        <div className={`${styles.layer__item} ${styles.layerFifth}`}></div>
        <div className={`${styles.layer__item} ${styles.layerSixth}`}></div>
      </div>
    </section>
  )
}
