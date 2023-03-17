type MenuProps = {
    children:React.ReactNode
}
export function ContactList({children}:MenuProps){
    return (
        <>
            <div className="ContactList">
                {children}
            </div>
        </>
    )
}