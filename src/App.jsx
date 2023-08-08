import './App.css'
import FooterPrincipal from './components/FooterPrincipal'
import Navbar from './components/Navbar'
import PrincipalPage from './components/PrincipalPage'

function App() {

  return (
    <div className='App'>
        <Navbar/>
        <PrincipalPage/>
        <FooterPrincipal/>
    </div>
  )
}

export default App
