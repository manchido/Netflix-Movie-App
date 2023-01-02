import { ArrowDownward, Search, Notifications } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import "./navbar.scss"


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true );
        return () => (window.onscroll = null);
    }   

    console.log(isScrolled)
    return (
    <div className= {isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src= "https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0"
                alt='Netflix logo'
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>

            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='https://cdn4.iconfinder.com/data/icons/avatars-of-people/5000/avatar_5-1024.png' alt='profile'/>
                <div className="profile">
                <ArrowDownward className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
                
            </div>
            
        </div>
       
    </div>
  )
}

export default Navbar