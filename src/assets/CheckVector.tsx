import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  isDone: boolean
}
const Trash: React.FC<Props> = ({ isDone = false }) => {
  return (
    <Svg width="100%" height="30" viewBox="0 2 15 11" fill="none">
      <Path opacity={isDone ? '1' : '0.3'} d="M1.09627 5.5L5.34127 9.745L13.8463 1.255" stroke={isDone ? '#ffffff' : '#3B3B3B'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default Trash
