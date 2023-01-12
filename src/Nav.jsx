import './App.css';
import outdoorLogo from "./outdoor-medicine-logo.png"

function Nav() {
    return (
        <div className='
        flex flex-row flex-auto w-screen justify-between'>
            <div className='flex'>
                <img src={outdoorLogo} alt="Outdoor Medicine logo"
                className='w-28' />
                <h1 className='self-center justify-self-center text-3xl'>Outdoor<br/>Medicine</h1>   
            </div>
            <li className="flex flex-row space-x-16 self-center mr-10">
                <ul>
                    <h2>
                    Home
                    </h2>
                </ul>
                <ul>
                    <h2>
                    About
                    </h2>
                </ul>
                <ul>        
                    <h2>
                    Contact
                    </h2>
                </ul>
            </li>
        </div>
    );
}

export default Nav;