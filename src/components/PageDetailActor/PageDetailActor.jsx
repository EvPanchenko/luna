import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, API_URL } from '../../api'
import { ChildrenNextShows, ChildrenPhoto } from '../childrensStudio'
import ActorInfo from '../createElement/ActorInfo/ActorInfo'
import ActorInfoSkeleton from '../createElement/Skeletons/ActorInfoSkeleton'
import MovieRoles from '../createElement/MovieRoles/MovieRoles'
import TheaterRoles from '../createElement/TheaterRoles/TheaterRoles'
import { Press } from '../play'

import styles from './PageDetailActor.module.scss'
import ChildrenNextShowsSkeleton from '../createElement/Skeletons/ChildrenNextShowsSkeleton'

const PageDetailActor = () => {
  const { id } = useParams()
  const [actorInfo, setActorInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const {
    cover,
    fullname,
    body,
    title,
    play_roles,
    press_items,
    movies,
    gallery,
    romashka_awards,
  } = actorInfo ?? {}

  const getInfoActor = () => {
    api
      .exportGetDetailInfoActor(id)
      .then((values) => {
        setActorInfo(values)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getInfoActor()
  }, [])

  const formatDate = (text, number) => {
    if (number) {
      return parseInt(text)
    } else {
      return text.replace(/[^А-Яа-яЁё]/g, '')
    }
  }

  const getWeekDay = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    let dates = new Date(date)
    return days[dates.getDay()]
  }

  const theatricalPerformance = useMemo(() => {
    let arr = []
    play_roles?.filter(({ play }) => {
      if (play.shows.length) {
        const newShow = play.shows?.map((item) => {
          return {
            rating: play.rating,
            title: play.title,
            isPremiere: play.isPremiere,
            buy: item.tickets_link,
            day: getWeekDay(item?.date),
            place: item?.place,
            month: formatDate(item.date_str, false),
            date: parseInt(item?.date_str.match(/\d+/)),
            time: item?.time,
          }
        })
        arr = [...arr, ...newShow]
      }
    })
    return arr
  }, [play_roles])

  const theaterRoles = useMemo(() => {
    let arr = []
    play_roles?.filter(({ play, roleTitle }) => {
      if (play.id) {
        arr.push({
          role: roleTitle,
          src: API_URL + play.cover.url,
          href: API_URL + play.cover.url,
          ...play,
        })
      }
    })
    return arr
  }, [play_roles])

  const galleryPhotos = useMemo(() => {
    let arr = []
    gallery?.filter(({ media, caption }) => {
      if (media.id) {
        arr.push({
          src: API_URL + media.url,
          caption,
          href: API_URL + media.url,
          ...media,
        })
      }
    })
    return arr
  }, [gallery])
  return (
    <section className={styles.containerDetailInfo}>
      <div className={styles.detailInfo}>
        {isLoading ? (
          <ActorInfoSkeleton />
        ) : (
          <ActorInfo
            img={API_URL + cover?.url}
            name={fullname}
            body={body}
            rank={title}
            romashka={romashka_awards}
          />
        )}
        {!isLoading ? (
          theatricalPerformance?.length ? (
            <ChildrenNextShows items={theatricalPerformance} actor={true} />
          ) : null
        ) : (
          <ChildrenNextShowsSkeleton />
        )}

        {play_roles?.length ? (
          <TheaterRoles content={theaterRoles} isLoading={isLoading} />
        ) : null}
        {movies?.length ? <MovieRoles movies={movies} /> : null}
        {press_items ? <Press press={press_items} actor={true} /> : null}
        {galleryPhotos?.length ? (
          <ChildrenPhoto items={galleryPhotos} id={12} />
        ) : null}
      </div>
    </section>
  )
}

export default PageDetailActor
