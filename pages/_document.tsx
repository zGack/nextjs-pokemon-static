import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from "@nextui-org/react";

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    }
  }

  // Configuracion necesaria para que los estilos se vean 
  // de manera similar en todos los navegadores web

  render() {
    return (
      <Html lang="es">
        <Head>
          { CssBaseline.flush() }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
