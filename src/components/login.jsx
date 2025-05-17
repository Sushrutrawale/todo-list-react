import { AlternateEmailTwoTone, HomeTwoTone, HouseTwoTone, PasswordTwoTone} from "@mui/icons-material";
import { Alert, Button, InputAdornment, Slide, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SlideSnackbar(props){
    return <Slide {...props} direction="left" />
}

export function Login(){
    const [alertMessage,setAlertMessage] = useState({open:false, message:'', severity:'info'});
    const formik =useFormik({

    });
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        setAlertMessage({open:true,message:'Login Successful...',severity:'success'})
        setTimeout(()=>{
            navigate('/dashboard');
        },2000)
    }

    return(
        <div>
            <div className="navbar" style={{position:'sticky',zIndex:'1000'}}>
                <div className="login-title-container">
                    <div className="login-title"><b>Login Form</b></div>
                </div>
                <div className="home-button-container">
                    <span className=' p-2 rounded-5 mx-4 fw-semibold background-link-color'><Link variant="container" className='mx-2 text-decoration-none text-link' to="/">Home <HomeTwoTone className='icon'/></Link></span>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                <div className="heading-gradiant" style={{fontSize:'80px'}}>To do list</div>
                <div className="my-4"> 
                    <div className="card rounded-3 p-4 my-4" style={{boxShadow:'0px 5px 10px black',background: 'linear-gradient(to right, #eacda3, #d6ae7b)'}}>
                        <h2>Login</h2>
                        <form>
                            <dl className="mt-4">
                                <dd className="my-4">
                                    <TextField name="Email" label="Email" variant="outlined" placeholder="Email" className="w-100" 
                                    slotProps={{input:{startAdornment:(
                                        <InputAdornment position="start">
                                            <AlternateEmailTwoTone/>
                                        </InputAdornment>
                                    )}}}/>
                                </dd>
                                <dd>
                                    <TextField name="Password" label="Password" variant="outlined" placeholder="Password" className="w-100" 
                                    slotProps={{input:{
                                        startAdornment:(
                                            <InputAdornment position="start">
                                                <PasswordTwoTone/>
                                            </InputAdornment>
                                        )
                                    }}}/>
                                </dd>                        
                            </dl>
                            <Button variant="contained" color="warning" className="rounded-5 fw-bold w-100" onClick={handleNavigate}>Continue</Button>
                        </form>
                    </div>
                    <div>
                        <fieldset className="d-flex flex-column justify-content-center align-items-center" >
                            <legend className="fs-6 text-center" >New to ToDo List?</legend>
                            <Link to="/register"><Button variant="contained" className="rounded-5 fw-semibold">Create Your ToDo List Account</Button></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Snackbar open={alertMessage.open} autoHideDuration={1000} onClose={()=>setAlertMessage({...alertMessage,open:false})}
                anchorOrigin={{vertical:'top',horizontal:'right'}} TransitionComponent={SlideSnackbar}>
                    <Alert severity={alertMessage.severity} variant="filled" onClose={()=>setAlertMessage({...alertMessage,open:false})}>
                        {alertMessage.message} 
                    </Alert>
            </Snackbar>
        </div>
    )
}