import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Filters from './Filters'
import {getParams} from '../helpers'

const Photos = ({photos, filters}) => {
  const photoCards = photos.map((photo) =>(
    <div className="PhotoCard" key={photo.id}>
      <Link to={`/photos/${photo.id}`}>
        <img
          src={photo.images.thumbnail.url}
          alt={photo.caption ? photo.caption.text : photo.id}
        />
      </Link>
    </div>
  ))

  return (
    <div className="Photos">
      <h1>Photos</h1>
      <Filters filters={filters} />
      <div className="grid">{photoCards}</div>
    </div>
  )
}

function getVisiblePhotos(photos, currentFilter) {
  if (!currentFilter) {
    return photos
  }

  return photos.filter((photo) => (photo.filter === currentFilter))
}

const mapStateToProps = (state, ownProps) => {
  const currentFilter = getParams(ownProps.location.search).filterBy

  return {
    photos: getVisiblePhotos(state.photos, currentFilter),
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(Photos)
