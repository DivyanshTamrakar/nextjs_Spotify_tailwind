import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify Clone</title>
      </Head>

      <main className="">
        <Sidebar />
        {/* Main Page */}
      </main>


      <div>
        {/* Player */}
      </div>

    </div>
  )
}
