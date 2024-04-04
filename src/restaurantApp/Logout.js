// import {redirect} from 'react-router-dom'
// const Logout=()=>{
//     localStorage.clear()
//     return(
//         <>
//           <redirect to='/logout' />
//         </>
//     )
// }
// export default Logout;



import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
        navigate('/login'); // Redirects to '/logout'
    }, [navigate]);

    return null; // or any UI component you wish to render during logout
}

export default Logout;
