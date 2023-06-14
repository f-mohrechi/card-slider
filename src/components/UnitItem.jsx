import React from 'react'

export default function UnitItem({item, value}) {
  return (
    <div class="one-third">
      <div class="stat">{value}</div>
      <div class="stat-value">{item}</div>
    </div>
  )
}
