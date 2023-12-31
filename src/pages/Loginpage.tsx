import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/UserProvider'
const base_authapi_url = import.meta.env.VITE_APP_AUTH_API


export default function Loginpage() {

    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const {user,setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        
        if(user.token){
        localStorage.setItem('token',JSON.stringify(user.token))
        localStorage.setItem('username',JSON.stringify(user.username))
        }
        if(user.token || localStorage.getItem('token')) navigate('/')
    },[user])
    
    async function handleLoginForm(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const res = await fetch(`${base_authapi_url}/verifyuser`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current?.value,
                password: passwordField.current?.value
            })

        })
        if(res.ok){
            const data= await res.json()
            console.log(data)
            setUser({loggedIn:true,username:String(usernameField.current?.value), token:data[0]['user token']})
            
            
        }
    }


  return (
    <>
            <h2>LoginPage</h2>
            <form onSubmit={handleLoginForm}>
                <label>Username:<br/>
                <input type="text" ref={usernameField} />
                </label><br/><br/>
                <label>Password:<br/>
                    <input type="password" ref={passwordField} />
                </label><br/><br/>
                <button>Sign In</button>
            </form>
            </>
  )
}