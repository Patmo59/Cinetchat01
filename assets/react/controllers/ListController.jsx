import React from 'react'

export default function ListController(props) {
  return (
    <div><ul>
        <li>{props.fullName}1</li>
        <li>{props.fullName} 2</li>
        <li>{props.fullName} 3</li>
    </ul></div>
  )
}
