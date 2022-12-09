import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorantes Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
    </div>
  )
}

export default App
