import React, { Component } from 'react'
import "./Header.css"
export class Header extends Component {
    render() {
        return (
            <div>
       
            <div className="abc">
            <div className="logo">
            <a href="/">
            <img src="https://everywhereist.com/wp-content/themes/everywhereist-v3/images/logo.svg" alt="The Everywhereist"/>
            </a>
            </div>
            <div style={{display:window.screen.width > 600 ? "block" :"none"}}>
   <div className="navbar1">
            <ul  className="navbarList">
        <li  className="A12021">
     <a href="" >The Book</a></li>
    <li id="menu-item-12006" className="a12006">
        <a href="">The Blog</a></li>
    <li id="menu-item-6087" className="a6087">
        <a href="">About Me</a></li>
    <li id="menu-item-12007" className="g12007">
        <a href="/">Travel Guides</a></li>
    </ul>
    					</div>
                        </div>



         <div style={{display:window.screen.width > 600 ? "none" :"flex",marginTop:25,paddingLeft:"5%",paddingRight:"5%"}}>
         <div style={{display:"flex",flexDirection:"column",width:"25%",height:"20%",justifyContent:"center",alignItems:"center"}}>
         <img src="/images/guide.svg" style={{width:50,height:50}} />
         <a href=""  className="first1">The Book</a>
         </div>
         <div style={{display:"flex",flexDirection:"column",width:"25%",height:"20%",justifyContent:"center",alignItems:"center"}}>
         <img src="/images/guide.svg"  style={{width:50,height:50}}/>
         <a href=""  className="first1">The Blog</a>
         </div>
         <div style={{display:"flex",flexDirection:"column",width:"25%",height:"20%",justifyContent:"center",alignItems:"center"}}>
         <img src="/images/guide.svg" style={{width:50,height:50}}/>
         <a href=""  className="first1">About Me</a>
         </div>
         <div style={{display:"flex",flexDirection:"column",width:"37%",height:"20%",justifyContent:"center",alignItems:"center"}}>
         <img src="/images/guide.svg" style={{width:50,height:50}}/>
         <a href=""  className="first1">Travel Guides</a>
         </div>
         
         </div>
          
        </div>
      
            </div>
        )
    }
}

export default Header
