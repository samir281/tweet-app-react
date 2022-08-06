import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { FaTwitterSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const Menu = () => {
    const location = useLocation();
    let navigate = useNavigate()

    const handleBack = () => {
        navigate('/success', { state: { userName: location.state.userName, userId: location.state.userId } })
    }

    const handleIcon = () => {
        navigate('/')
    }

    return (
        <div><Navbar className="bg-dark" variant='dark'>.
            <Navbar.Brand>
                <FaTwitterSquare className='m-1' onClick={handleIcon}/>
                Tweet App
            </Navbar.Brand>
            <Nav className="ms-auto">
            <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          '& > *': {
                            m: 1,
                          },
                        }}
                      >
            <Button >view all Tweets</Button>
            </Box>
                <Nav.Link onClick={handleBack}>Menu</Nav.Link>
                <Nav.Link href='/'>Logout</Nav.Link>
            </Nav>
        </Navbar></div>
    )
}

export default Menu