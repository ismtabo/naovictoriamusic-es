import { Theme, css } from '@emotion/react'
import {
  atomicTangerine,
  black,
  brightGray,
  chineseSilver,
  darkCharcoal,
  jasmine,
  milk,
  pearlyPurple,
  rainbowIndigo,
  russianViolet,
  spanishGray,
} from './colors'

export const styles = css``

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      black: string
      blue: string
      purple: string
      white: string
      yellow: string
      orange: string
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
    primary: atomicTangerine,
    secondary: rainbowIndigo,
    black: russianViolet,
    blue: rainbowIndigo,
    purple: pearlyPurple,
    white: milk,
    yellow: jasmine,
    orange: atomicTangerine,
    gray0: brightGray,
    gray20: chineseSilver,
    gray40: spanishGray,
    gray60: darkCharcoal,
    gray80: darkCharcoal,
    gray100: black,
  },
}
