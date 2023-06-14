import React from 'react'

export default function CardItem({type, children}) {
  return (
    <>
      <div class={type}>{children}</div>
    </>
  )
}
