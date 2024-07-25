import '../styles/contact.css';
import { useNavigate } from 'react-router-dom';
export default function Contact(){
const navigate = useNavigate();
    return (
        <>
<h1>There are currently no contacts available.</h1>
<div className = 'gobackcontainer'>
        <button id ='goback' onClick = {() => navigate(-1)}>Go back</button>
</div>


    </>);
}