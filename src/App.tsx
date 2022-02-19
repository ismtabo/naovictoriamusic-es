import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import background from './assets/img/background.jpg'
import GlobalStyles from './components/GlobalStyles'
import Name from './components/Name'
import Social from './components/Social'
import Content from './containers/Content'
import { theme } from './styles'
import { breakpointWidthL } from './styles/devices'

const Root = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  @media (max-width: ${breakpointWidthL}) {
    background-position: 25% 0%;
  }
`

export default function App() {
  return (
    <Root>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Content>
            <Name />
            <Social />
        </Content>
      </ThemeProvider>
    </Root>
  );
}
