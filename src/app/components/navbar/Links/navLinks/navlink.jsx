"use client"
import React from 'react'
import styles from './navlink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink=({item,toggleBtn})=> {
    const pathName=usePathname()
  return (
    <div >
       <Link href={item.path}  className={`${styles.container}  ${pathName==item.path && styles.active}` } onClick={()=>toggleBtn()} >
             {item.title}
      </Link>
    </div>
  )
}

export default Navlink
