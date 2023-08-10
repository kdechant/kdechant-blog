import Image from './Image'
import { FC } from 'react'

type FigureProps = {
  align: string
  width?: number
  height?: number
  src: string
  alt: string
  caption: string
}

const Figure: FC<FigureProps> = (props) => {
  const width = props.width || 450
  const height = props.height || 392
  const align = props.align || 'right'

  return (
    <figure className={`figure-${align}`}>
      <Image src={props.src} width={width} height={height} alt={props.alt} />
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
