import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyle from './styles/global'

import { Analytics } from './pages/Analytics'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  </React.StrictMode>,
)
