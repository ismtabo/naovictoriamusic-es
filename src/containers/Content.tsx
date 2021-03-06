import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { breakpointHeightM, breakpointWidthM } from '../styles/devices'

const Div = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  @media (max-width: ${breakpointWidthM}) {
    top: 5%;
    bottom: 5%;
    right: unset;
  }
  @media (max-height: ${breakpointHeightM}) {
    gap: 1em;
    left: 10%;
  }
`

interface Props {
  children: ReactNode
}

export default function Content({ children }: Props) {
  return <Div>{children}</Div>
}
