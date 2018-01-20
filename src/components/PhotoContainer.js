import React from 'react'
import {connect} from 'react-redux'
import {findPhoto} from '../helpers'

const Photo = ({photo}) => {
  const comments = photo.comments.data.map((comment) => (
    <p key={comment.id}>
      <strong>@{comment.from.username}</strong>: {comment.text}
    </p>
  ))

  return (
    <div className="Photo">
      <h1>Photo by @{photo.user.username}</h1>
      <img
        src={photo.images.low_resolution.url}
        alt={photo.caption ? photo.caption.text : photo.id} />
      {comments}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    photo: findPhoto(ownProps.match.params.id, state.photos),
  }
}

export default connect(mapStateToProps)(Photo)
