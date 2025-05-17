import { FacebookRounded, Google, Instagram, Twitter, YouTube } from '@mui/icons-material';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { Login } from './components/login';
import { Register } from './components/register';
import { Dashboard } from './components/dashboard';
import { Home } from './components/home';
import { Edit } from './components/edit';


function App() {
  const location = useLocation();
  const hideFooterLinks = ['/login', '/register', '/dashboard', '/account', '/edit'].includes(location.pathname);


  return (
    <div className='app-body'>
      <header>

      </header>
      <section>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='edit' element={<Edit/>}/>
        </Routes>
      </section>
      <footer className="bg-dark">
        <div className='d-flex justify-content-center social-links'>
          <span className='rounded-circle p-2 mx-4 social-link-span' title='Facebook'><a href='' className='socail-link-anchor'><FacebookRounded className='social-link-icons'/></a></span>
          <span className='rounded-circle p-2 mx-4 social-link-span' title='Instagram'><a href='' className='socail-link-anchor'><Instagram className='social-link-icons'/></a></span>
          <span className='rounded-circle p-2 mx-4 social-link-span' title='Twitter'><a href='' className='socail-link-anchor'><Twitter className='social-link-icons'/></a></span>
          <span className='rounded-circle p-2 mx-4 social-link-span' title='Google'><a href='' className='socail-link-anchor'><Google className='social-link-icons'/></a></span>
          <span className='rounded-circle p-2 mx-4 social-link-span' title='Youtube'><a href='' className='socail-link-anchor'><YouTube className='social-link-icons'/></a></span>
        </div>
        {!hideFooterLinks && (
          <div className='d-flex justify-content-center footer-nav'>
            <a href='#home' className='mx-4 text-decoration-none footer-nav-link'>Home</a>
            <a href='#about' className='mx-4 text-decoration-none footer-nav-link'>About</a>
            <a href='#contact' className='mx-4 text-decoration-none footer-nav-link'>Contact</a>
          </div>
        )}
        <div className='d-flex justify-content-center copy-right'>
          <p className='text-light' style={{fontFamily:'Arial'}}>Copyright &copy;2025; Designed by <span className='text-uppercase'><b>Sushrut</b></span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
