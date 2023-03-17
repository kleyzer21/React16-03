import { Title } from "../Title";
import './style.css'
import { ContactCard } from "../ContactCard";
import { ContactList } from "../ContactList";
export function Agenda ( ) {
    return(
        <>
          <header>
                <Title text='Agenda de contatos' />
            </header>
            <main>
            <ContactList>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </ContactList>
            </main>
            
        </>
    )
}