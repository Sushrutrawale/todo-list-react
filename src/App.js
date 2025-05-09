import { Button, IconButton } from '@mui/material';
import { AccountCircleTwoTone } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div className='container-fluid app-body'>
      <header className='d-flex justify-content-between'>
        <div>
          <h1>Todo List</h1>
        </div>
        <div className='nav'>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </div>
        <div>
          <Button>
            <AccountCircleTwoTone color='secondary' className='fs-3'/>
          </Button>
        </div>
      </header>
      <section>
        <div className='card p-4 m-4' style={{boxShadow:'2px 2px 2px black',backgroundColor:'transparent'}}>
          <div className='card-body'>
            <Button>Login</Button>
            <Button>Signin</Button>
          </div>
        </div>
      </section>
      <footer className="bg-warning" style={{height:'300px'}}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
