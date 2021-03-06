
import Landing from "../components/landing"
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.pathname === href ? 'red' : 'black',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}
