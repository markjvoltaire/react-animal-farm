import React from 'react'
import './Main.css'
import background from '../../background.png'
import { animals } from '../../data'

import Animal from '../Animal/Animal'

export default function Main() {
  const styles = { backgroundImage: `url(${background})` }
  return (
    <main style={styles}>
      <Animal key={Animal.type} {...Animal} />
    </main>
  )
}
