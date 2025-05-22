import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Click Counter App</h1>
      <div style={styles.counter}>{count}</div>
      <div>
        <button style={styles.button} onClick={increase}>Increase</button>
        <button style={styles.button} onClick={decrease}>Decrease</button>
      </div>
      {count >= 10 && <p style={{color: 'red'}}>You've reached the limit!</p>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Arial, sans-serif',
  },
  counter: {
    fontSize: 48,
    margin: 20,
  },
  button: {
    fontSize: 20,
    margin: 10,
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default App;

