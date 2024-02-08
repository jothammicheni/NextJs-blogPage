
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './link.module.css'
import NavLink from './navLinks/navlink'
import * as FaIcons from "react-icons/fa";

const LinkPath=[
    {
        title:'Homepage',
        path:'/'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Contact',
        path:'/contact'
    },
    {
        title:'Blog',
        path:'/blog'
    }
]
function Links() {

    const[open, setOpen]=useState(false)
    const isSession=true;
    const isAdmin=true;

     const toggleBtn=()=>{
        setOpen(!open) 
     }

  return (
    <div className={styles.container}>
    <div className={styles.links}>
       {
        LinkPath.map(link=>(
         <NavLink item={link} key={link.title} toggleBtn={toggleBtn}/>    
        ))        
       }
       {
         isSession?(
            <>
            {isAdmin && <NavLink item={{path:'/admin', title: 'Admin' }}/> }
            <button className={styles.logout}>Logout</button>
            </>
         ):(
            <NavLink item={{path:'login' , title:'Login'}}/>
         )}
    </div>
    <FaIcons.FaBars className={styles.navBtn}  onClick={()=>toggleBtn()}/>
        {
        open && (
            <div className={styles.mobileLinks}>
              {
               LinkPath.map((link)=>(
                <NavLink item={link} key={link.title}  />
               ))
          }
          {
         isSession?(
            <>
            {isAdmin && <NavLink item={{path:'/admin', title: 'Admin' }}/> }
            <button className={styles.logout}>Logout</button>
            </>
         ):(
            <NavLink item={{path:'login' , title:'Login'}}/>
         )}
            </div>
        )
    }
  </div>
  )
}

export default Links
