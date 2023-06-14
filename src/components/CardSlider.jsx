import React from 'react'
import CardBox from './CardBox'
import ArrowBtn from './ArrowBtn'

export default function CardSlider() {
  return (
    <div class="slide-container">
      <div class="wrapper">
        <ArrowBtn />
        <CardBox />
        <ArrowBtn />
      </div>
    </div>
  )
}
