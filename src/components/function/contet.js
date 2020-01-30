import React from 'react'

import {
  Card, 
  InfoContent, 
  InfoLocal } from '../style/content'

import Date from './date'

const card = props => (
  <Card bg={props.bg}>
    <InfoContent>
      <InfoLocal>{props.place}</InfoLocal>
      <Date 
        dateIn={props.dateIn}
        dateOut={props.dateOut}
      />
    </InfoContent>
  </Card>
)

export default card