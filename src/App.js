import { Button, IconButton } from '@mui/material';
import { AccountCircleTwoTone, Facebook, FacebookRounded, Google, Instagram, Twitter, YouTube } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div className='app-body'>
      <header className='container-fluid'>
        <div className='navbar d-flex justify-content-between'>
          <div className='mx-2'>
            <h1>Todo List</h1>
          </div>
          <div className='nav mx-2'>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </div>
          <div className='mx-2'>
            <Button>
              <AccountCircleTwoTone color='secondary' className='fs-3'/>
            </Button>
          </div>
        </div>
      </header>
      <section className='container-fluid'>
        <div className='row p-4'>
          <div className='col d-flex justify-content-center align-items-center'>
            <div className='text-uppercase heading-gradiant'>To Do <br/> List</div>
          </div>
          <div className='col'>
            <div className='card rounded rounded-5 p-4 w-100 authr-card' style={{boxShadow:'2px 2px 2px black'}}>
              <h2>Welcome Back!</h2>
              <p>
                Manage your tasks efficiently. Please log in or register to continue.
              </p>
              <div>
                <Button className='rounded-5 mx-4' color='primary' variant='contained'>Login</Button>
                <Button className='rounded-5' color='secondary' variant='contained'>Register</Button>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className='container-fluid'>

        </div>
      </section>
      <footer className="bg-dark">
        <div className='d-flex justify-content-center social-links'>
          <span className='rounded-circle p-2 bg-light mx-4'><a href='' className='text-dark'><FacebookRounded/></a></span>
          <span className='rounded-circle p-2 bg-light mx-4'><a href='' className='text-dark'><Instagram/></a></span>
          <span className='rounded-circle p-2 bg-light mx-4'><a href='' className='text-dark'><Twitter/></a></span>
          <span className='rounded-circle p-2 bg-light mx-4'><a href='' className='text-dark'><Google/></a></span>
          <span className='rounded-circle p-2 bg-light mx-4'><a href='' className='text-dark'><YouTube/></a></span>
        </div>
        <div className='d-flex justify-content-center footer-nav'>
          <Button className='mx-4'>Home</Button>
          <Button className='mx-4'>About</Button>
          <Button className='mx-4'>Contact Us</Button>
        </div>
        <div className='d-flex justify-content-center copy-right'>
          <p className='text-light'>Copyright &copy;2025;Designed by <span className='text-uppercase'>Sushrut</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
