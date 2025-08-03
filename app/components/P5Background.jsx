'use client';
import { useRef, useEffect } from 'react';
import p5 from 'p5';
import Walker from '../p5/Walker';

const P5Background = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let myP5;
    let walker = new Walker();

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();
      };

      p.draw = () => {
        walker.show();
        walker.move();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // clean up on unmount
    };
  }, []);

  return (
    <div
      className="P5Background"
      ref={sketchRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  );
};

export default P5Background;
