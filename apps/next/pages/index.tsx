import React from 'react'
import { NextPage } from 'next'
import { TextLink } from 'solito/link'
import { Text, useSx, View, H1, P, Row, A } from 'dripsy'

const Home: NextPage = () => {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <h1>Hello to the Dashboard</h1>
      <P sx={{ textAlign: 'center' }}>made with Solito(Next.js) + Supabase</P>
      <TextLink
        href="/app"
        textProps={{
          style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
        }}
      >
        Acessar App
      </TextLink>
    </View>
  )
}

export default Home
