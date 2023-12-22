import { useState } from 'react';
import TabButton from '../components/TabButton';
import {EXAMPLES} from '../data'
import Section from './Section';

export default function Examples() {

    useState();



    let [selectedTopic, setSelectedTopic] = useState()

    function selecthandler(SelectedButton) {

        setSelectedTopic(SelectedButton)
        console.log(selectedTopic);
    }

    return(
        <Section title='Examples' id='examples'>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => selecthandler('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => selecthandler('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => selecthandler('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => selecthandler('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre id='Code'>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>}
        </Section>
    )
}