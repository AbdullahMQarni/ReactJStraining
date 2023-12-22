import CoreConcept from '../components/CoreConcept';
import { CORE_CONCEPTS } from '../data';
import Section from './Section';



export default function CoreConcepts() {
    return(
        <Section title='Core Concepts' id='core-concepts'>
            <ul>
                {CORE_CONCEPTS.map((CoreConceptitem) => (<CoreConcept {...CoreConceptitem} />))}
            </ul>
        </Section>
    )
}