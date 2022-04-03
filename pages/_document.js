// change the way out nextjs pages render
import { ServerStyleSheets } from '@material-ui/core/styles'
import { Html, Head, Main, NextScript } from '@mui/icons-material'
import React from 'react'

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

// fixing material-ui styles - now they change after re-rendering web
MyDocument.getInitialProps = async(context) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage
    context.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        })
    }
    const initialProps = await Document.getInitialProps(context)
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles), 
            sheets.getStyleElement()
        ]
    }
}