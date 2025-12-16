import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ color: 'white', fontSize: '40px' }}>
        This is my first React Application!
      </h1>
      <MyComponent
        title="Hello from Props!"
        description="This component uses properties to display dynamic content."
      />
    </div>
  );
}

export default App;