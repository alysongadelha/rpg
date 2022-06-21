import React from 'react'

const CardInfo = ({info}) => {
  return (
    <div>
        <h1>{info.name}</h1>
        <h3>{info.clan}</h3>
    </div>
  )
}

export default CardInfo