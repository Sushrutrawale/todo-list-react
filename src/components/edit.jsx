import { EditTwoTone, LogoutTwoTone, NumbersTwoTone } from "@mui/icons-material";
import { Alert, Button, FormControl, InputAdornment, Slide, Snackbar, TextareaAutosize, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SlideSnackbar(props){
    return <Slide {...props} direction="left"/>
}

export function Edit(){
    const [alertMessage,setAlertMessage] = useState({open: false, message:'', severity:'info'});
    const formik = useFormik({
        initialValues:{
            Number : 0 ,
            List : ''
        },
        onSubmit:(user)=>{
            setAlertMessage({open:'true',message:'List Updated',severity:"success"});
            setTimeout(()=>{
                navigate("/dashboard")
            },2000);
        }
    });

    const navigate = useNavigate();

    const handleCancelClick = ()=>{
        navigate('/dashboard');
    }

    return(
        <div style={{height:'100vh'}}>
            <div className="navbar d-flex justify-content-between align-items-center p-2" style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1000 }}>
                <div>
                    <h2 className="mx-1 dashboard-title">Modify List</h2>
                </div>
                <div>
                    <span className=' p-2 rounded-5 mx-1 fw-semibold background-link-color'><Link variant="container" className='mx-2 text-decoration-none text-link' to="/login">Logout <LogoutTwoTone className='icon'/></Link></span>
                </div>
            </div>
            <div className="m-4 edit-body" style={{paddingTop:'7%'}}>
                <div className="d-flex flex-column justify-content-center align-items-center w-100">
                    <div className="bg-light p-4 rounded-5" style={{  background: 'linear-gradient(to right,  #00b4db, #0083b0)'}}>
                        <h3 className="my-3"><EditTwoTone/> Edit List</h3>
                        <form className="mt-4" onSubmit={formik.handleSubmit}>
                            <dl>
                                <dd>
                                    <TextField name="Number" type="number" label="Number" placeholder="Number" onChange={formik.handleChange} variant="filled" color="secondary" slotProps={{
                                        input:{
                                            startAdornment:(
                                                <InputAdornment position="start">
                                                    <NumbersTwoTone/>
                                                </InputAdornment>
                                            )
                                        }
                                    }}/>
                                </dd>
                                <dd className="my-3">                                    
                                    <TextareaAutosize aria-label="To Do" placeholder="To Do" style={{width:'290px'}} maxRows={4} name="List" onChange={formik.handleChange}/>
                                </dd>
                            </dl>
                            <Button type="submit" variant="contained" className="float-end rounded-5 save-btn fw-semibold" color="success" style={{boxShadow:'0px 2px 5px black'}}>save</Button>
                            <Button variant="contained" className="rounded-5 cancel-btn fw-semibold" color="error" style={{boxShadow:'0px 2px 5px black'}} onClick={handleCancelClick}>cancel</Button>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Snackbar open={alertMessage.open} autoHideDuration={1000} onClose={()=> setAlertMessage({...alertMessage, open:false})}
                anchorOrigin={{vertical:'top',horizontal:'right'}} TransitionComponent={SlideSnackbar}>
                    <Alert severity={alertMessage.severity} variant="filled" onClose={()=> setAlertMessage({...alertMessage, open:false})}>
                        <b>{alertMessage.message}</b>
                    </Alert>
            </Snackbar>
        </div>
    )
}