import React, { useState } from 'react';

function App() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        incrementer      </button>
      <button onClick={() => setCount(count - 1)}>
        decrementer
      </button>
    </div>
  );
}
export default App