import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
      <div className={ styles.hero_sec+ ' ' +'dis-flex'+ ' '+'vmiddle'}>
          <div className="container dis-flex vmiddle">
              <div className={styles.content}>
                  <h1>Data</h1>
                  <h1 className={styles.blue}>Secured</h1>
                  <h1>Protection</h1>
                  <div>
                     <a href="/" className='primary_btn'>Learn More</a>
                  </div>
              </div>
              
          </div>
      </div>
  )
}

export default Hero