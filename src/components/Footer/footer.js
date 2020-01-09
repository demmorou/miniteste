import React from 'react';

export default function Footer() {

  return (
    <footer style={{ position: 'absolute', bottom: 0, color: 'white', padding: '15px' }}>
      {/* getting the current year */}
      Aqui temos um footer, { new Date().getFullYear() }
    </footer>
  );
}
