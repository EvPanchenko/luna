import React from 'react'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper'

import styles from './TheaterRoles.module.scss'
import { CreatePlaysCard } from '../playsCard'
import CreatePlaysCardSkeleton from '../Skeletons/CreatePlaysCardSkeleton'

const TheaterRoles = ({ content, isLoading }) => {
  return (
    <section className={styles.boxTheaterRoles}>
      <p className={styles.theatricalRolesTitle}>РОЛИ В ТЕАТРЕ ЛУНЫ</p>

      {IsMobile ? (
        <div className={styles.pressSlider}>
          {isLoading ? (
            <CreatePlaysCardSkeleton />
          ) : (
            <Swiper
              slidesPerView='auto'
              centeredSlides={true}
              spaceBetween={20}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[Pagination]}
              className='pressSwiper'
              style={{
                '--swiper-pagination-bullet-inactive-color': '#fff',
                '--swiper-pagination-color': '#8CABFA',
                '--swiper-pagination-bullet-inactive-opacity': '0.6',
              }}
            >
              {content?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <CreatePlaysCard data={item} role={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ) : (
        <div className={styles.roleCards}>
          {isLoading ? (
            <div className={styles.skeletonCards}>
              {' '}
              {[1, 2, 3].map((item) => (
                <CreatePlaysCardSkeleton key={item} />
              ))}{' '}
            </div>
          ) : (
            content?.map((item) => (
              <CreatePlaysCard
                data={item}
                role={true}
                key={`roles-card-${item?.id}`}
              />
            ))
          )}
        </div>
      )}
    </section>
  )
}

export default TheaterRoles
