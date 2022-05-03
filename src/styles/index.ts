import { Theme, css } from '@emotion/react'
import {
  beaver,
  black,
  brightGray,
  chineseSilver,
  darkCharcoal,
  sealBrown,
  spanishGray,
  white,
} from './colors'

export const styles = css`
  :root {
    --primary: ${sealBrown};
    --secondary: ${beaver};
    --white: ${white};
    --black: ${black};
    --gray0: ${brightGray};
    --gray20: ${chineseSilver};
    --gray40: ${spanishGray};
    --gray60: ${darkCharcoal};
    --gray80: ${darkCharcoal};
    --gray100: ${black};
  }
`

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
      gray0: string
      gray20: string
      gray40: string
      gray60: string
      gray80: string
      gray100: string
    }
  }
}

export const theme: Theme = {
  colors: {
    primary: `var(--primary, ${sealBrown})`,
    secondary: `var(--secondary, ${beaver})`,
    white: `var(--white, ${white})`,
    black: `var(--black, ${black})`,
    gray0: `var(--gray0,${brightGray})`,
    gray20: `var(--gray20,${chineseSilver})`,
    gray40: `var(--gray40,${spanishGray})`,
    gray60: `var(--gray60,${darkCharcoal})`,
    gray80: `var(--gray80,${darkCharcoal})`,
    gray100: `var(--gray100,${black})`,
  },
}
