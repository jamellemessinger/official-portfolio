'use client';
import { useRef, useEffect } from 'react';
import Walker from '../p5/Walker';

const P5Background = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let myP5;

    import('p5').then((p5) => {
      const sketch = (p5Instance) => {
        let walker;

        p5Instance.setup = () => {
          p5Instance.createCanvas(
            p5Instance.windowWidth,
            p5Instance.windowHeight
          );
          walker = new Walker(
            p5Instance,
            p5Instance.windowWidth,
            p5Instance.windowHeight
          );
        };

        p5Instance.draw = () => {
          p5Instance.frameRate(24);
          walker.show();
          walker.move();

          if (walker.offScreen()) {
            walker = new Walker(p5Instance);
          }
        };

        p5Instance.windowResized = () => {
          p5Instance.resizeCanvas(
            p5Instance.windowWidth,
            p5Instance.windowHeight
          );
        };
      };

      myP5 = new p5.default(sketch, sketchRef.current);
    });

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
