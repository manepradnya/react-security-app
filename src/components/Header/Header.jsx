import React, { useState} from 'react'
import styles from './Header.module.css'
import { SiDatabricks } from 'react-icons/si'
import { FaBars } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import {Link} from 'react-router-dom'

const Header = () => {
    const [nav, setNav ] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
      <div name='top' className={ styles.header_sec }>
          <div className="container dis-flex vmiddle">
              <div className={styles.left_col}>
                  <div className={styles.logo}>
                      <Link to='/'>
                        <SiDatabricks className={styles.icon} size={40}/>
                        Secured.
                      </Link>
                  </div>
              </div>
              <div className={styles.right_col}>
                  <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                      <li> <Link to='/'>Home</Link> </li>
                      <li> <Link to='/recovery'>Recovery</Link> </li>
                      <li><Link to='/cloud'>Cloud</Link> </li>
                      <li><Link to='/contact'>Contact</Link> </li>
                  </ul>
                  <div className={ styles.hamburger } onClick={handleNav}>
                  {nav ? <GrFormClose size={ 25 } /> :  <FaBars size={25}/> }
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Header