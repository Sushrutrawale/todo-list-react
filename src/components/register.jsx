import { AlternateEmailTwoTone, HomeTwoTone, PasswordTwoTone, PersonOutlineTwoTone } from "@mui/icons-material";
import { Alert, Button, InputAdornment, Slide, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SlideSnackbar(props){
    return <Slide {...props} direction="left" />
}

export function Register(){
    const [alertMessage,setAlertMessage] = useState({open:false, message:'', severity:'info'});
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        setAlertMessage({open:true,message:'Account created...',severity:'success'});
        setTimeout(()=>{
            navigate('/login');
        },2000)
    }

    return(
        <div>
            <div className="navbar" style={{position:'sticky',zIndex:'1000'}}>
                <div className="registration-title-container">
                    <div className="register-title"><b>Registration <br/> Form</b></div>
                </div>
                <div className="register-home-button-container">
                    <span className=' p-2 rounded-5 mx-4 fw-semibold background-link-color'><Link variant="container" className='mx-2 text-decoration-none text-link' to="/">Home <HomeTwoTone className='icon'/></Link></span>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-4 register-body">
                <div className="heading-gradiant" style={{fontSize:'80px'}}>To do list</div>
                <div className="my-4"> 
                    <div className="card rounded-3 p-4 my-4 register-card" style={{boxShadow:'0px 5px 10px black',background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
                        <h2>Register</h2>
                        <form>
                            <dl className="mt-4">
                                <dd className="my-4">
                                    <TextField name="Name" label="Name" variant="outlined" placeholder="Name" className="w-100" 
                                    slotProps={{input:{startAdornment:(
                                        <InputAdornment position="start">
                                            <PersonOutlineTwoTone/>
                                        </InputAdornment>
                                    )}}}/>
                                </dd>
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
                                    slotProps={{input:{startAdornment:(
                                        <InputAdornment position="start">
                                            <PasswordTwoTone/>
                                        </InputAdornment>
                                    )}}}/>
                                </dd>                        
                            </dl>
                            <Button variant="contained" color="primary" className="rounded-5 fw-bold w-100" onClick={handleNavigate}>Register</Button>
                        </form>
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