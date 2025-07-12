'use client'

import dynamic from 'next/dynamic'

const Education = dynamic(() => import('./education'), {
  ssr: false,
})

export default function EducationWrapper() {
  return <Education />
}