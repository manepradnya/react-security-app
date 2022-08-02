import React from 'react'
import styles from './Recovery.module.css'

const Recovery = () => {
  return (
      <div className={ styles.recovery_sec}>
          <div className="container">
              <div className={styles.content}>
              <h2><span>Data</span> Recovery</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo. Quisquam, ipsam sunt repudiandae vero ullam consequatur commodi aliquam rem dolorem quidem! Amet atque, fugiat dicta deleniti officia quod quibusdam!</p>
              <div>
              <a href='/' className='primary_btn'>Learn More</a>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Recovery