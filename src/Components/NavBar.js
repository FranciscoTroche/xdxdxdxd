import Container from '../../node_modules/react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const NavBar = () => {
    const [scrolled, setScrolled]= useState(false);
    const [activeLink, setActiveLink] = useState('home');
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>informacion</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Compra</Nav.Link>
          <Nav.Link href="#project" className={activeLink === 'project'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Creditos</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/FranciscoTroche"><img src={navIcon1} alt=""></img></a>
                <a href="https://www.facebook.com/"><img src={navIcon2} alt=""></img></a>
                <a href="https://www.instagram.com/"><img src={navIcon3} alt=""></img></a>
            </div>
            <button className="formulario" onClick={()=>console.log('Conectado')}><Nav.Link href="#formulario" className={activeLink === 'formulario'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('formulario')}>Iniciar Secion</Nav.Link></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
