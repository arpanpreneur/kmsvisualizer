import React from 'react';
import './App.css';
import KMP from './visualizations/kmp';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
         <Container fluid={true}>
          <Navbar.Brand>
                Knuth-Morris-Pratt (KMP) Algorithm Visualization
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="https://www.linkedin.com/in/arpan-mukherjee-531980167/" target="_blank">
                <i className="fab fa-linkedin mr-4"></i>
              </a>
              <a href="https://github.com/ArpanKIIT2017" target="_blank">
                <i className="fab fa-github mr-4"></i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
         </Container>
        </Navbar>

      <KMP />

      {/* <footer>
        <hr />
        Made with ❤️ by <a href="https://www.linkedin.com/in/arpan-mukherjee-531980167/" target="_blank">Arpan Mukherjee</a>
      </footer> */}
    </div>
  );
}

export default App;
