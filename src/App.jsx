import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const[values,setvalues]= useState(8);
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const[Password,setPassword]= useState(" ")
  const password_reff= useRef("")

  

  useEffect(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789"
    if(character) str+="~!@#$%^&*()_+{}:<>"

    for(let i=0; i<=values; i++){
      let char= Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[values,number,character])

  const copytoclickboard=()=>{
    password_reff.current?.select()
    window.navigator.clipboard.writeText(Password)
  }

  return (
    
    <div className='grid place-content-center h-screen w-full '>
     <h1 className=' my-3 text-4xl  text-white'>Password Generator</h1>
     <div className='   w-[600px] h-[120px] bg-gray-700 border-2 border-none rounded-lg overflow-hidden position-fixed'>
      <div className=' mt-2 ml-3 flex flex-row w-[600] h-12 overflow-hidden'>
      <input className='rounded-lg p-2 w-[500px] text-orange-500' type="text" placeholder='password' value={Password} readOnly ref= {password_reff} />
        <button className=' shrink-0 outline-none bg-sky-500 text-white font-serif p-2  ml-0 rounded-lg' onClick={copytoclickboard}>Copy</button>
      </div>
      <div className='w-full h-10 mt-4 flex'>
        <input className='mr-3 font-bold text-2xl  'type='range' min={0} max={50} value={values} onChange={(evt)=>setvalues(evt.target.value)}/>
        <label className='text-2xl text-orange-600'>Length:{values}</label>

        <input className='ml-5' type='checkbox' defaultChecked={number} value={number} onChange= {()=> setnumber(prev=>(!prev))}/>
        <label className='text-2xl text-orange-600' >Numbers</label>

        <input className='ml-5' type='checkbox' defaultChecked={character} value={character} onChange= {()=> setcharacter(prev=>(!prev))}/>
        <label className='text-2xl text-orange-600' >Characters</label>
        
      </div>


     </div>
    
     </div>
    
  )
}

export default App
