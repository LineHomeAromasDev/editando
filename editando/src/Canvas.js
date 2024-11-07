import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.setWidth(800);
    canvas.setHeight(600);

    // Example: Add a circle to the canvas
    const circle = new fabric.Circle({
      radius: 50,
      fill: 'blue',
      left: 100,
      top: 100,
    });
    canvas.add(circle);

    // Cleanup on unmount
    return () => {
      canvas.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
