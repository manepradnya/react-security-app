import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact_sec}>
            <div className="container">
                <div className={styles.form_cont }>
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your name'/>
                        </div>
                        <button className='primary_btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact