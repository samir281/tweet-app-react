import { Modal } from "bootstrap";
import { useEffect, useState } from "react"
import { Card, Container, ModalBody, ModalHeader } from "react-bootstrap";
import { FaUserSecret } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Menu from "./NavBar"
let users=[]
export function ViewAllUsers()
{
    let[usersList,setusersList]=useState(users)
    let location =useLocation();
    function fetchallUsers(){
        fetch(`getallusers`,{
            method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
        }).then((res)=>{
            return res.json()
        }).then(data=>{
            usersList=data;
            setusersList(usersList)
        })
    }
    useEffect(()=>{
        fetchallUsers()
    },[])
    return(
        <div>
        <Menu/>
        <h1>All Users</h1>
        <Container>
        {
            usersList.map(function(user,index){
                return(
                    <Card>
                    <Card.Body>
                            <>
                                <FaUserSecret className='m-1' />
                                        <b>{user.username}</b>
                            </>
                            <Card.Text key={user.id}> FirstName {user.firstname}</Card.Text>
                            <Card.Text key={index}>Lastname {user.lastname}</Card.Text>
                    </Card.Body>
                    </Card>
                )}
            )
        }
        </Container>
        </div>
    )
}