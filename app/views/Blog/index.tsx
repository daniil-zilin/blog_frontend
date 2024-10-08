import React from 'react'
import BlogItem from '@/app/components/modules/blog_page'

export default function BlogView({ slug }) {
  return (
    <BlogItem slug={slug} />
  )
}