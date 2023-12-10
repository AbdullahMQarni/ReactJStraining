import 'react'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import { useState } from 'react';
import TabButton from './components/TabButton';
import {EXAMPLES} from './data'

function App() {
  useState();
  
  const [count, setCounter] = useState(0);


  let [selectedTopic, setSelectedTopic] = useState()

  function selecthandler(SelectedButton) {

    setSelectedTopic(SelectedButton)
    console.log(selectedTopic);
  }

  return (
    <>
      <div>
        <Header />
        <main>

          <div className='myCounter'>
            <h1>counter: {count}</h1>
            <button onClick={() => setCounter(count + 1)}>Press Here for +</button><br></br>
            <button onClick={() => setCounter(count - 1)}>Press Here for -</button><br></br>
            <button onClick={() => setCounter(0)}>Reset Counter</button>
          </div> 

          <h2>Time to get started!</h2>
          <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          </section>
          <section id='examples'>
            <h2>hello </h2>
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

          </section>  
        </main>
      </div>
    </>
  );
}

export default App;
