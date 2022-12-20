import React from 'react'
import ContentLoader from 'react-content-loader'

const ChildrenNextShowsSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='672px'
      backgroundColor='#161a3b'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='100' rx='10' ry='10' width='465' height='37' />
      <rect x='0' y='217' rx='10' ry='10' width='100%' height='74' />
      <rect x='0' y='319' rx='10' ry='10' width='100%' height='74' />
      <rect x='0' y='421' rx='10' ry='10' width='100%' height='74' />
    </ContentLoader>
  )
}

export default ChildrenNextShowsSkeleton
