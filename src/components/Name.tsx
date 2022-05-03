import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { breakpointWidthM } from '../styles/devices'

const Div = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  textAlign: 'right',
})

const H1 = styled.h1`
  font-size: 5rem;
  @media (max-width: ${breakpointWidthM}) {
    font-size: 3em;
  }
`

export default function Name() {
  const theme = useTheme()
  return (
    <Div>
      <H1 style={{ color: theme.colors.primary }}>Nao</H1>
      <H1 style={{ color: theme.colors.secondary }}>Victoria</H1>
      <h2 style={{ color: theme.colors.gray40 }}>Música en vivo</h2>
    </Div>
  )
}
