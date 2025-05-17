import { Button, SpeedDial, SpeedDialAction, TextField, Typography } from '@mui/material';
import { AccountCircleTwoTone, HomeTwoTone, InfoTwoTone, MenuTwoTone, SmartphoneTwoTone} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function Home(){
    const actions =[
    {icon: <HomeTwoTone/>,name :'Home', link:'#home'},
    {icon: <InfoTwoTone/>,name :'About', link:'#about'},
    {icon: <SmartphoneTwoTone/>,name :'Contact', link:'#contact'}
  ]
    return(
        <div>
            <div className='header'>
                <div className='navbar'>
                <div className='mx-2'>
                    <SpeedDial direction='down' ariaLabel="Navigation SpeedDial" sx={{
                        height: 40,
                        '& .MuiFab-primary': {
                        width: 40,
                        height: 40,
                        minHeight: 'unset'
                        },
                    }} icon={<MenuTwoTone />} className='speed-dial' FabProps={{sx:{width:45,height:45,minHeight:'unset'}}}>
                    {
                        actions.map((action)=>(
                        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={() => window.location.href = action.link}/>
                        ))
                    }
                    </SpeedDial>
                </div>
                <div className='nav mx-2 d-none d-sm-flex'>
                    <span className=' p-2 rounded-5 mx-4 fw-semibold background-link-color'><a href='#home' className='mx-2 text-decoration-none text-link'>Home <HomeTwoTone className='icon'/></a></span>
                    <span className='p-2 rounded-5 mx-4 fw-semibold background-link-color'><a href='#about' className='mx-2 text-decoration-none text-link'>About <InfoTwoTone className='icon'/></a></span>
                    <span className='p-2 rounded-5 mx-4 fw-semibold background-link-color'><a href='#contact' className='mx-2 text-decoration-none text-link'>Contact <SmartphoneTwoTone className='icon'/></a></span>
                </div>
                <div className='mx-2'>
                    <Link to="/login">
                        <Button title='Account' className='rounded-5 account-btn fw-bold'>
                            <span className='account-login-title text-light'>Login</span> <AccountCircleTwoTone color='secondary' className='account-icon' sx={{fontSize:{xs:'3rem',sm:'1rem',md:'2.5rem',lg:'2rem'}}}/>
                        </Button>
                    </Link>
                </div>
                </div>
            </div>
            <main className='container-fluid' id="home">
                <div className='row p-4'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='text-uppercase heading-gradiant'>To Do <br/> List</div>
                </div>
                <div className='col'>
                    <div className='card rounded rounded-5 p-4 w-100 authr-card mt-3' style={{boxShadow:'2px 2px 2px black'}}>
                    <h2>Welcome Back!</h2>
                    <p>
                        Manage your tasks efficiently. Please log in or register to continue.
                    </p>
                    <div>
                        <Link to="/login"><Button className='rounded-5 login-button fw-semibold' color='primary' variant='contained'>Login</Button></Link>
                        <Link to="/register"><Button className='rounded-5 register-button fw-semibold' color='secondary' variant='contained'>Register</Button></Link>
                    </div>
                    </div>
                </div>
                </div>

                <div className='d-flex justify-content-center align-items-center w-100'>
                <div className='card rounded rounded-5 p-4 mt-4 start-task' style={{ boxShadow: '2px 2px 2px black'}}>
                    <h3>Your To-Do</h3>
                    <p>
                    Start managing your tasks now. Click below to get started!
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                    <Button
                        variant="contained"
                        color="warning"
                        className="rounded-5 fw-semibold mb-3"
                        sx={{width:'30%',height:'50px'}}
                    >
                        Start
                    </Button>
                    </div>
                    <form>
                    <div className='mb-3'>
                        <TextField fullWidth label="New Task" variant="outlined" />
                    </div>
                    <Button variant="contained" color="primary" className='rounded-4 fw-semibold'>Add Task</Button>
                    </form>
                </div>
                </div>

                {/* About section */}
                <div id='about'>
                <div className="container py-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                        <Typography variant="h4" gutterBottom className="mb-4 fw-bold">
                        About Our To-Do List
                        </Typography>
                        <Typography variant="body1" className="mb-3">
                        Our To-Do List web application is designed to help you stay organized, focused, and productive. Whether you're managing daily personal tasks or keeping track of a busy work schedule, our intuitive interface makes it easy to add, edit, and complete your tasks in real-time.
                        </Typography>
                        <Typography variant="body1" className="mb-3">
                        Built with the latest web technologies including <b>React.js</b> and <b>Material UI</b>, the app ensures a smooth and responsive experience across devices. You can log in to manage your tasks securely and view them anytime, anywhere.
                        </Typography>
                        <Typography variant="body1">
                        Our goal is to simplify task management so you can focus on what matters most. Thank you for using our app!
                        </Typography>
                    </div>
                    </div>
                </div>
                </div>

                {/* Contact */}
                <div className='mb-4' id='contact'>
                <div className="container py-5">
                    <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <Typography variant="h4" gutterBottom className="mb-4 fw-bold">Contact Us</Typography>
                        <Typography variant="body1" className="mb-4">
                        Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you soon!
                        </Typography>
                        <form>
                        <div className="mb-3">
                            <TextField fullWidth label="Your Name" variant="outlined" />
                        </div>
                        <div className="mb-3">
                            <TextField fullWidth type="email" label="Email Address" variant="outlined" />
                        </div>
                        <div className="mb-3">
                            <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit" className='rounded-5 fw-semibold border-0'>
                            Send Message
                        </Button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

            </main>
        </div>
    )
}