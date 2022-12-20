import React from 'react'
import ContentLoader from 'react-content-loader'

const CreatePlaysCardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='460px'
      backgroundColor='#161a3b'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='95%' height='289' />
      <rect x='0' y='319' rx='10' ry='10' width='95%' height='26' />
      <rect x='0' y='355' rx='10' ry='10' width='95%' height='26' />
      <rect x='0' y='411' rx='10' ry='10' width='35%' height='45' />
    </ContentLoader>
  )
}

export default CreatePlaysCardSkeleton
