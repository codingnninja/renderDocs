import React, {useEffect} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <span><Image width={100} height={20} alt='render logo' src='/renderlogo.png' /></span>,
  project: {
    link: 'https://github.com/codingnninja/renderDocs',
  },
  chat: {
    link: 'https://discord.gg/txz6rgfM',
  },
  docsRepositoryBase: 'https://github.com/codingnninja/renderDocs',
  footer: {
    text: '$render docs | Copyright @ 2023 ',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – SWR'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="$render" />
      <meta property="og:description" content="JSX in the browser without virtual DOM" />
    </>
  )
}

export default config
