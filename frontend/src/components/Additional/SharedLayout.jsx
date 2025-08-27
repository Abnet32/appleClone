import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const SharedLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout