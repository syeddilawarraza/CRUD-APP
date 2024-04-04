// import React, { useEffect, useState } from 'react'
// export default function Update() {
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [rating,setRating]=useState('');
//   const [address,setAddress]=useState('');
//   useEffect(()=>{
//     fetch('http://localhost:3000/Restaurant/'+this.props.match.params.id).then((response)=>{
//       response.json()
//     }).then((result)=>{
//       console.warn(result)
//       setName({
//         name:result.name
//       })
//     })
//   })
//   const handleUpdate=()=>{
//   }
//   // console.warn(this.props.match.params)
//   return ( 
//   )
// }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Update() {
  const { id } = useParams(); // Accessing the 'id' from URL params
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/Restaurant/${id}`)
        .then((response) => response.json())
        .then((result) => {
          console.warn(result);
          setName(result.name);
          setEmail(result.email);
          setRating(result.rating);
          setAddress(result.address);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);
  const handleUpdate = () => {
    fetch(`http://localhost:3000/Restaurant/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, rating, address }) 
    })
    .then((result) => result.json())
    .then((resp) => {
      alert("Restaurant added successfully");
    })
  };
  return (
    <div>
      <h1>Update Restaurant</h1> 
      <input onChange={(e)=>setName(e.target.value)} placeholder='Restaurant Name' value={name}  /> <br  /> <br  />
     <input onChange={(e)=>setEmail(e.target.value)} placeholder='Restaurant Email' value={email}  /> <br  /> <br  />
      <input onChange={(e)=>setRating(e.target.value)} placeholder='Restaurant Rating' value={rating}  /> <br  /> <br  />
       <input onChange={(e)=>setAddress(e.target.value)} placeholder='Restaurant Address' value={address} /> <br  /> <br  />
   <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

