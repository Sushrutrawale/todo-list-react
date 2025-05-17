import { ChecklistTwoTone, EditTwoTone, LogoutTwoTone, RemoveCircleTwoTone } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props} />
})

export function Dashboard(){
    const [open,setOpen] = useState(false);

    const handleClickOpen = ()=>{
        setOpen(true);
    }

    const handleClickClose= ()=>{
        setOpen(false);
    }

    const navigate = useNavigate();
    return(
        <div>
            <div className="navbar d-flex justify-content-between align-items-center p-2" style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1000 }}>
                <div>
                    <h2 className="mx-1 dashboard-title">Dashboard</h2>
                </div>
                <div>
                    <span className=' p-2 rounded-5 mx-1 fw-semibold background-link-color'><Link variant="container" className='mx-2 text-decoration-none text-link' to="/login">Logout <LogoutTwoTone className='icon'/></Link></span>
                </div>
            </div>
            <div className="m-4">
                <h3>Hello ! <b>Rakesh</b></h3>
                <div className="d-flex justify-content-center">
                    <div className="row list-row d-flex w-100" style={{ maxWidth: '800px' }}>
                        <div className="col-12 col-md-3 p-3 first-col" style={{ background: 'linear-gradient(to right, #fc00ff, #00dbde)' }}>
                            <div className="h-4 text-uppercase fw-bold">To-Do Filters</div>
                            <hr className="border-3" />
                            <div className="my-3">
                                <dl style={{ fontSize: '19px' }}>
                                <dd className="list-box"><a href="#" className="text-decoration-none list-link">Completed</a></dd>
                                <dd className="list-box"><a href="#" className="text-decoration-none list-link">Remaining</a></dd>
                                <dd className="list-box"><a href="#" className="text-decoration-none list-link">Ongoing</a></dd>
                                </dl>
                            </div>
                            </div>

                            <div className="col-12 col-md-9 second-col" style={{ background: 'linear-gradient(to right, #2c3e50, #3498db)' }}>
                            <div className="p-2 fw-bold text-light text-uppercase">
                                <ChecklistTwoTone className="me-2" /> Your List
                            </div>
                            <div className="bg-light p-2 my-3 overflow-y-scroll" style={{ height: '400px', borderRadius: '20px' }}>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <td></td>
                                        <td align="center" className="fw-bold">List</td>
                                        <td align="center" className="fw-bold">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td><input type="checkbox" className="form-check-input" /></td>
                                        <td><span className="form-check-label" style={{ fontSize: '17px' }}>Appointment with doctor @12:00 PM</span></td>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                            <Link to="/edit">
                                                <IconButton className="dashboard-icon-button">
                                                <EditTwoTone className="dashboard-icon" />
                                                </IconButton>
                                            </Link>
                                            <IconButton className="dashboard-icon-button" onClick={handleClickOpen}>
                                                <RemoveCircleTwoTone className="dashboard-icon" />
                                            </IconButton>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td><input type="checkbox" className="form-check-input" /></td>
                                        <td><span className="form-check-label" style={{ fontSize: '17px' }}>Party at night @8:00 PM</span></td>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                            <Link to="/edit">
                                                <IconButton className="dashboard-icon-button">
                                                <EditTwoTone className="dashboard-icon" />
                                                </IconButton>
                                            </Link>
                                            <IconButton className="dashboard-icon-button" onClick={handleClickOpen}>
                                                <RemoveCircleTwoTone className="dashboard-icon" />
                                            </IconButton>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td><input type="checkbox" className="form-check-input" /></td>
                                        <td><span className="form-check-label" style={{ fontSize: '17px' }}>Business meeting with Foreign client @7:00 PM</span></td>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                            <Link to="/edit">
                                                <IconButton className="dashboard-icon-button">
                                                <EditTwoTone className="dashboard-icon" />
                                                </IconButton>
                                            </Link>
                                            <IconButton className="dashboard-icon-button" onClick={handleClickOpen}>
                                                <RemoveCircleTwoTone className="dashboard-icon" />
                                            </IconButton>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Dialog open={open} slots={{transition: Transition}} keepMounted onClose={handleClickClose} aria-describedby="dailog-slide-description">
                                    <DialogTitle>{"Delete"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="dailog-slide-description">
                                            Are you sure?<br/>
                                            You want to delete this content from list? 
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClickClose}>Cancel</Button>
                                        <Button onClick={handleClickClose}>Delete</Button>
                                    </DialogActions>

                                </Dialog>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}