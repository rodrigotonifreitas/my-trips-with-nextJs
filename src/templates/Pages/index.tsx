import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const URL_PROJECT = process.env.NEXT_PUBLIC_URL_PROJECT

export type PageTemplateProps = {
  heading: string
  body: {
    html: string
    text: string
  }
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${heading} - My Trips`}
      description={
        body?.text ||
        'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
      }
      canonical={URL_PROJECT}
      openGraph={{
        url: URL_PROJECT,
        title: `${heading} - My Trips`,
        description:
          body?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
      }}
    />

    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size="32" />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body.html }} />
      </S.Body>
    </S.Content>
  </>
)

export default PageTemplate
