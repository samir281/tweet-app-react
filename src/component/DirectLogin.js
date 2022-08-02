import { useEffect, useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { useNavigate ,useLocation} from "react-router"
import Header from "./Header"
import { url } from './url'
import "../styles/Login.css"

export default function DirectLogin() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [result, setreslut] = useState([true,''])
    const navigate = useNavigate();
    const location=useLocation();
    const handleSubmit = (e) => {
        e.preventDefault()
        let uid = ''
        if(username!=='')
        {
        let form={username,password}
        fetch(`${url}/login`,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then((response)=>{
            if(response.status===200){
                response.text().
                then((body)=>{
                    let jwt1='Bearer '+body;
                    let flag=true;
                    setreslut([flag,jwt1])
                   // console.log("result ",result);
                });
            }
            else{
                let flag='false'
                console.log(flag)
                setreslut([flag,''])
            }
        })
        console.log("result ",result);
        console.log("flag ",result[0]);
            if (result[0] === 'false') {
                alert('Enter correct credentials or register!!')
            }

            else {
                console.log("jwt ",result[1])
                // navigate('/success', { state: { userId: uid, userName: username }})
            }
        }
        else {
            alert("Enter your credentials")
        }
    }
    const redirettoregister = () => {
        navigate("/register")
    }

    // useEffect(() => {
    //     fetch(`${url}/users/all`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setUserData(data)
    //             console.log(userData)
    //         })
    // }, [username]);
let title=""
if(location)
{
    title="Welcome to tweet app, Login to view tweets from your friends";
}
else{
    title=`Hey ${location.state.name}, You are successfully registered!! Please Login`;
}
    return (
        <div>
            <Header />
            <Container>
                <h4 className="LoginHeader">{title}</h4>
                <Form>
                    <Form.Group>
                        <Form.Label id="username">Username</Form.Label>
                        <Form.Control type="text" aria-labelledby="username" data-testid="username" name="username" placeholder="Enter your username!" onChange={e => setUserName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="password">Password</Form.Label>
                        <Form.Control type="password" aria-labelledby="password" data-testid="password" name="password" placeholder="Enter your password!" onChange={e => setPassword(e.target.value)} required='true' />
                    </Form.Group>
                    <div className="regButton">
                        <Button variant="primary" onClick={handleSubmit} formNoValidate>LOGIN</Button>{' '}
                        <Button aria-hidden="true" variant="success" onClick={redirettoregister}>REGISTER</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}