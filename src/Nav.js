import { Navbar, Container } from 'react-bootstrap';

function Nav() {
  return (
    <>
      <Navbar bg="light"  >
        <Container>
          <Navbar.Brand style={{ fontSize: '2.1rem' }}> <i class="bi bi-calendar3"></i> </Navbar.Brand>

          <Navbar.Brand style={{ fontSize: '2rem' }}>BirthDay's </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <i>Created by:</i> <div style={{ fontSize: '2rem' }}>
                <a href="https://www.linkedin.com/in/sidchopp/" target="_blank"><b><i class="bi bi-alt"></i><i class="bi bi-cursor-text"></i><i class="bi bi-chevron-right"></i></b></a>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar></>
  )
};

export default Nav;