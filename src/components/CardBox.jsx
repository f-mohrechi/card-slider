import React from 'react'
import ArrowBtn from './ArrowBtn'
import Units from './Units'
import CardImg from './CardImg'
import CardItem from './CardItem'

export default function CardBox() {
  return (

    <div class="clash-card barbarian">

      <CardImg />


      <CardItem type={"clash-card__level clash-card__level--barbarian"}>Level 4</CardItem>
      <CardItem type={"clash-card__unit-name"}>Barbarian</CardItem>
      <CardItem type={"clash-card__unit-description"}>The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for
        destruction. He has Killer yellow horseshoe mustache.</CardItem>


      <Units />


    </div>
  )
}
