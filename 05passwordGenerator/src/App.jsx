
import { useState,useCallback,useEffect,useRef } from 'react';


function App() {
const [length, setLength]=useState(8)
const[numberAllowed,setnumberAllowed]=useState(False);
const[charAllowed,setCharAllowed]=useState(False)
const[password,setPassword]=useState("")

//useRef hook
const passwordRef=useRef(null)
const passwordGenerator=useCallback(()=>{

  let pass=" "
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*_+[]{}~`"
  for (let i=0; i<= length; i++) {
    let char=Math.floor(Math.random()*str.length +1)
    pass+=str.charAt(char)
  }



  setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password])




useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='className="flex=shadow rounded-lg overflow-hidden mb-4" '>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly />
        </div>
      </div>
    </>
  )
}

export default App
