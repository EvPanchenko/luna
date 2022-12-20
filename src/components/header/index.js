import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowScrollPositions } from '../../assets/utils/usable-function'
import styles from './header.module.scss'

function Header() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useWindowScrollPositions()
  const opacityEl = window.screen.width > 1200 ? (scrollY >= 200 ? 0 : 1) : 0
  return (
    <header>
      <div className={styles.header_top}>
        <div className={styles.header_info_gov}>
          <a href='http://kultura.mos.ru/' target='_blank' rel='noreferrer'>
            <img
              className={styles.header_info_icon}
              src='/img/header-gov.png'
              alt=''
            ></img>
          </a>
          <a
            href='http://kultura.mos.ru/'
            target='_blank'
            rel='noreferrer'
            className={styles.header_info_text}
          >
            Департамент культуры <br /> города Москвы
          </a>
        </div>
        <div className={styles.header_info_blind}>
          <img
            className={styles.header_info_icon}
            src='/img/glasses.png'
            alt=''
            width='40px'
            height='40px'
          ></img>
          <a href='/' className={styles.header_info_text}>
            Версия для <br /> слабовидящих
          </a>
        </div>
        <Link to='/' className={styles.mobileLogo}>
          <img
            className={styles.mobileLogoImg}
            id={'href'}
            src='/img/logo.png'
            alt=''
          />
        </Link>
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuIcon} onClick={() => setOpen(!open)}>
            <div
              className={
                open ? styles.mobileMenuIconOpen : styles.mobileMenuIconClose
              }
            ></div>
          </div>
          <div
            className={
              open
                ? styles.mobileMenuContainerOpen
                : styles.mobileMenuContainerClose
            }
          >
            <ul className={styles.mobileMenuList}>
              <li>
                <Link to='/playbill'>Афиша</Link>
              </li>
              <li>
                <Link to='/plays'>Спектакли</Link>
              </li>
              <li>
                <Link to='/troupe'>Труппа</Link>
              </li>
              <li>
                <Link to='/history'>Театр</Link>
              </li>
              <li>
                <Link to='/children-studio'>
                  Детская театральная студия &#171;Маленькая Луна&#187;
                </Link>
              </li>
              <li>
                <Link to='/news'>Новости</Link>
              </li>
              <li>
                <Link to='/press'>Пресса</Link>
              </li>
              <li>
                <Link to='/contacts'>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to='/'
          className={styles.logoContainer}
          style={{
            transition: 'all 0.3s linear',
            opacity: opacityEl,
          }}
        >
          <div className={styles.back_elipse} />
          <img className={styles.moon_logo} src='/img/moon_logo.png' alt='' />
          <img
            className={styles.text_logo}
            id={'href'}
            src='/img/text_logo.png'
            alt=''
          />
        </Link>
      </div>
    </header>
  )
}
export default Header
