const URL_PROJECT = process.env.NEXT_PUBLIC_URL_PROJECT

export default {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: URL_PROJECT,
    site_name: 'My Trips'
  },
  twitter: {
    handle: '@reactjs',
    site: '@site',
    cardType: 'summary_large_image'
  }
}
