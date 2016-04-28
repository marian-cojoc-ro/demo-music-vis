import _assign from 'lodash/assign';

const sampleCanvasState = {
  width: 100, // total canvas width
  height: 100, //total canvas height
  beats: [ //beats array with coords, size, and orientation
    {
      pos: [
        ['x1', 'y1'],
        ['x2', 'y2'],
      ],
      color: 'hsla()'
    }
  ]
};

// takes application state and transforms it to canvas state ready to be rendered

const transform = (state) => {
  let canvasState = {
    test: [10, 10, state.test, 100]
  };

  // put width and height to canvas state, so that the render knows what to clear
  _assign(canvasState, state.config.canvas);

  return canvasState;
};

export default transform;
