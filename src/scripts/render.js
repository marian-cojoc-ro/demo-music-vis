const testRendering = (state, ctx) => {
  ctx.fillStyle = "red";
  ctx.fillRect(...state.test);
};

const clearCanvas = (state, ctx) => {
  const {width, height} = state;
  ctx.clearRect(0, 0, width, height);
};


const render = (canvasState, ctx) => {
  clearCanvas(canvasState, ctx);
  testRendering(canvasState, ctx);
};

export default render;
