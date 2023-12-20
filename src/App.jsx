import 'react'
import Header from './components/Header'
import CoreConcepts from './components/CoreConcepts'
import Counter from './components/Counter'
import Examples from './components/Examples';

function App() {
  

  return (
    <>
      <div>
        <Header />
        <main>
          
          <CoreConcepts />

          <Examples />
          
          <Counter />
        </main>
      </div>
    </>
  );
}

export default App;
