import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import useGetAppStoreAndProps from "@/app/store/useGetAppStoreAndProps"
import { useRouter } from "next/router"

export default function App(props: AppProps) {
  const router = useRouter()
  const {
  store,
  props: { Component, pageProps },
} = useGetAppStoreAndProps(props, router)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    )
}