import { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/UserProvider'


export default function NavBar() {

    const { user } = useContext(AuthContext)
    
    return (
    <Navbar>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/login">login</Nav.Link>
    </Nav.Item>
    {user.token || localStorage.getItem('token') ? (
      <>
    <Nav.Item>
      <Nav.Link as={NavLink} to="/list">Inventory</Nav.Link>
    </Nav.Item>
    <Nav.Item>
            <Nav.Link as={NavLink} to="/logout">
              Logout
            </Nav.Link>
    </Nav.Item>
    <Nav.Item>
            <Nav.Link as={NavLink} to="/Post">
              User Collection
            </Nav.Link>
    </Nav.Item>
    </>):(
      <>
    </>
    )}
    
  </Navbar>

  )
}