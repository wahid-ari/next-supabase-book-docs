import '@styles/globals.css'
import '@styles/prism.css'
import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: any) => page)
  return getLayout(
    <Component {...pageProps} />
  )
}
