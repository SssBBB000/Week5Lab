import React from 'react';

const MyComponent = (props) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <h2 style={{ color: 'darkblue' }}>{props.title}</h2>
      <p style={{ fontSize: '20px' }}>{props.description}</p>
      <button 
        onClick={handleClick}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  );
};

export default MyComponent;