// import React, { useState } from 'react'

// function Create() {
//   const [name,setName]=useState(null);
//   const [email,setEmail]=useState(null);
//   const [rating,setRating]=useState(null);
//   const [address,setAddress]=useState(null);
//   const Create=(e)=>{
//     console.warn(name )
//   }
//   return (
//     <div>
//       <input onChange={(e)=>setName(e.target.value) }   placeholder='Restaurant Name'/> <br/>< br />
//       <input onChange={(e)=>setEmail(e.target.value) }   placeholder='Restaurant Email'/> <br/>< br />
//       <input onChange={(e)=>setRating(e.target.value) }   placeholder='Restaurant Rating'/> <br/>< br />
//       <input onChange={(e)=>setAddress(e.target.value) }   placeholder='Restaurant Address'/> <br/>< br />
//       <button onClick={()=>Create} >Added Restaurant</button>
//     </div>
//   )
// }

// export default Create




import React, { useState } from 'react';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('');

  const handleCreate = () => {
    console.warn(name, email, rating, address);
    fetch('http://localhost:3000/Restaurant', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, rating, address }) 
    })
    .then((result) => result.json())
    .then((resp) => {
      alert("Restaurant added successfully");
    })
    // .catch((error) => {
    //   console.error('Error adding restaurant:', error);
    // });
  }; 
  return (
    <div className='mt-5'>
      <input onChange={(e) => setName(e.target.value)} placeholder='Restaurant Name' /><br /><br />
      <input onChange={(e) => setEmail(e.target.value)} placeholder='Restaurant Email' /><br /><br />
      <input onChange={(e) => setRating(e.target.value)} placeholder='Restaurant Rating' /><br /><br />
      <input onChange={(e) => setAddress(e.target.value)} placeholder='Restaurant Address' /><br /><br />
      <button onClick={handleCreate}>Add Restaurant</button>
    </div>
  );
}

export default Create;
