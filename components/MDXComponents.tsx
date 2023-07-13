/**
 * Loader for components that are available for use inside .mdx data files.
 *
 * This works as a sort of dependency injection system, to allow components to be
 * used from within the markdown in .mdx files. E.g., to display images, etc.
 */

/* eslint-disable react/display-name */
import React from 'react'
import { MDXLayout, ComponentMap } from 'pliny/mdx-components'
import { TOCInline } from 'pliny/ui/TOCInline'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'

import Image from './Image'
import Figure from './Figure'
import CustomLink from './Link'

export const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  Figure,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
}
