import * as React from 'react';
import { Nav } from './nav';

export function Page1() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Animated Ellipsis</h1>
      </div>

      <div
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
      >
        <AnimatedEllipsis />
      </div>
    </div>
  );
}

function AnimatedEllipsis() {
  return (
    <div className="animated-ellipsis-container">
      <div className="animated-ellipsis-dot" />
      <div className="animated-ellipsis-dot" />
      <div className="animated-ellipsis-dot" />
    </div>
  );
}
