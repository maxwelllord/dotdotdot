import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={"main"}>
      <Head>
        <title>...</title>
        <meta name="description" content="Punctuation for dummies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"tac"}>
        <h1>...</h1>
        <div className={"m-box"}>
          <p className={"m m2"}>Typing...like this is...makes your message...difficult...to read</p>
          <p className={"m m1 delay1"}>Typing like this makes your message easy to read</p>
          <p className={"m m1 delay2"}>If it's worth reading, it's worth your time to make it readable</p>
        </div>
      </main>
    </div>
  )
}
