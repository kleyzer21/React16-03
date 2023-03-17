import { User } from 'phosphor-react'
import './style.css'
type MenuItemProps={
    icon:React.ReactNode 
    text: string
}

export function MenuItem({icon, text}:MenuItemProps){
    return(
        <>
        <a href="#" className="MenuItem">
       {icon}{text}
        </a>
        </>
    )
}