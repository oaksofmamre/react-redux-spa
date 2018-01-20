import React from 'react'
import {NavLink} from 'react-router-dom'

const Filters = ({filters}) => {
  const filterLinks = filters.map((filter) => (
    <span key={filter}>
      <NavLink
        activeClassName="active"
        to={`/photos?filterBy=${filter}`}
        isActive={(match, location) => (
          location.search === `?filterBy=${filter}`
        )}
      >
        {filter}
      </NavLink>{' '}
    </span>
  ))

  return (
    <p>
      Filter by:{' '}
      <NavLink
        activeClassName="active"
        exact to="/photos"
        isActive={(match, location) => (location.search === '')}
      >
        All
      </NavLink>{' '}
      {filterLinks}
    </p>
  )
}

export default Filters
