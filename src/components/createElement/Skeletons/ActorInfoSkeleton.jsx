import React from 'react'
import ContentLoader from 'react-content-loader'

const ActorInfoSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='672px'
      backgroundColor='#161a3b'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='505' height='672' />
      <rect x='630' y='0' rx='10' ry='10' width='250' height='37' />
      <rect x='630' y='87' rx='10' ry='10' width='350' height='57' />
      <rect x='630' y='164' rx='10' ry='10' width='505' height='83' />
      <rect x='630' y='267' rx='10' ry='10' width='505' height='26' />
      <rect x='630' y='373' rx='10' ry='10' width='640' height='262' />
    </ContentLoader>
  )
}

export default ActorInfoSkeleton
