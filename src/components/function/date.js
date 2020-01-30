import React from 'react'

import{ InfoDate } from '../style/content'

const getDate = date => {
  let data = new Date(date)
  let months = [
    'Jan', 
    'Fev', 
    'Mar', 
    'Abr',
    'Mai', 
    'Jun', 
    'Jul', 
    'Ago', 
    'Set', 
    'Out',
    'Nov',
    'Dec'
  ]

  let day = data.getDay()
  let month = months[data.getMonth()]
  
  return `${day} ${month}`
}

const date = props => (
  <InfoDate>
    {getDate(props.dateIn)} - {getDate(props.dateOut)}
  </InfoDate>
)

export default date