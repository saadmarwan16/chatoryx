import type { NextPage } from 'next'
import Meta from '../components/shared/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta title='Home' />

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>CHATORYX IS COMING SOON</h1>
      </div>
    </>
  )
}

export default Home
