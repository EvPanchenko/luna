import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../../mainPage'
import { WINDOW_SCREEN, IsMobile, getDateStr } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './styles.css'
// import required modules
import { Navigation } from 'swiper'

import styles from './calendar.module.scss'
const ARR_OFFSET = 3
const DAY = 1000 * 60 * 60 * 24
const DATE_NUMBER = WINDOW_SCREEN > 573 ? 15 : 8
const DATE_LOAD_LENGTH = DATE_NUMBER + 20 * ARR_OFFSET
const SLIDER_HEIGHT = WINDOW_SCREEN > 573 ? 33 : 40
const IsShortSwipes = IsMobile ? true : false

function DateBtn({ date: { date, free }, isselected, setSelected }) {
  const getDate = getDateStr(date)

  return (
    <>
      <div
        className={
          isselected
            ? styles.dateBtnContainerSelected
            : free
            ? styles.dateBtnContainer
            : styles.dateBtnContainerHover
        }
      >
        <img src='/img/calendar_luna.png' alt='' />
        <div
          className={styles.dateContainer}
          onClick={() => {
            !free && setSelected(date)
          }}
        >
          <div className={styles.dateNum}>
            <span> {getDate.date}</span>
          </div>
          <div className={styles.weekDay}>{getDate.day_of_week}</div>
        </div>
      </div>
    </>
  )
}

export function Calendar(props) {
  const { items, setFirstDate, popupOpen } = props
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  const [selected, setSelected] = React.useState(() => {
    const date = new Date(items[0].full_date)
    return date
  })

  const dates = React.useMemo(() => {
    const today = new Date(new Date().toISOString().slice(0, 10))
    return Array.from({ length: DATE_LOAD_LENGTH }, (_, i) => {
      const date = new Date()
      date.setTime(today.getTime() + (i - ARR_OFFSET) * DAY)
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.full_date)
          return itemdate.getTime() === date.getTime()
        }),
      }
    })
  }, [items])

  const initialSlide = dates.map((date) => date.free).indexOf(false)

  return (
    <>
      <section id='affiche' className={styles.affiche}>
        <div className={styles.afficheContent}>
          <div className={`${styles.curtain} ${styles.curtainsLenf}`}>
            <img src='/img/curtainsLeft.png' />
          </div>
          <div className={`${styles.curtain} ${styles.curtainsRight}`}>
            <img src='/img/curtainsRight.png' />
          </div>
          <div
            className={styles.datesStrip}
            style={{
              '--strip-height': `${SLIDER_HEIGHT}px`,
            }}
          >
            <div className={styles.wrapper}>
              <img
                src='/img/larr.png'
                alt='<'
                className={styles.larr}
                ref={navigationPrevRef}
              />
              <div className={styles.dateWindow}>
                <Swiper
                  slidesPerView={5}
                  slidesPerGroup={5}
                  spaceBetween={10}
                  grabCursor={true}
                  longSwipesRatio={0.4}
                  shortSwipes={IsShortSwipes}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  initialSlide={initialSlide}
                  modules={[Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 10,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 15,
                    },
                  }}
                  onInit={(swiper) =>
                    setFirstDate(dates[swiper.activeIndex].date)
                  }
                  onActiveIndexChange={(swiper) =>
                    setFirstDate(dates[swiper.activeIndex].date)
                  }
                  className='calendarSlider'
                >
                  {dates.map((date, i) => (
                    <SwiperSlide key={i}>
                      {
                        <DateBtn
                          key={i}
                          date={date}
                          isselected={
                            date.date.getTime() === selected.getTime()
                          }
                          setSelected={setSelected}
                        />
                      }
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <img
                src='/img/rarr.png'
                alt='>'
                className={styles.rarr}
                ref={navigationNextRef}
              />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.cardsWindowContainer}>
              <Item items={items} selected={selected} popupOpen={popupOpen} />
              <div className={styles.mobileButton}>
                <Link to={'/plays'}>все спектакли</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
