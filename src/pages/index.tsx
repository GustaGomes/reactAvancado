/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'

type Props = {
  title: string
}

export default function Home ( {title = 'Colocando aqui o meu title'}: Props )  {
  return (
 
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >{ title }</h1>

      </main>
    </div>
    
  )
}
