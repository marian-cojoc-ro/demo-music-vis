// bootstrap the application
import domready from 'domready';
import bean from 'bean';
import _assign from 'lodash/assign';
import _compose from 'lodash/fp/compose';
import _curry from 'lodash/fp/curry';

import {tick as tickAction, setSize as setSizeAction, testAction} from './actions';
import {defaultState} from './state';
import render from './render';
import transform from './transform';
import utils from './utils';

let state = defaultState;

const frameOp = (ctx, delta) => {
  state = tickAction(delta, state);

  const gameState = transform(state);

  render(gameState, ctx);
};

const frame = (ctx) => {
  frameOp(ctx);
};
const tick = () => {
  frame(window.c);
  window.requestAnimationFrame(tick);
};

domready(() => {

  const $c = window.$c = document.getElementById('c');
  const c = window.c = $c.getContext('2d');

  const initialViewPort = utils.viewPort();

  state = setSizeAction(initialViewPort, state);
  utils.setDim($c, initialViewPort);
  tick();

  //setup interface
  const testRange = document.getElementById('cp');
  bean.on(testRange, 'input', (e) => {
    const value = e.target.value;
    state = testAction(value, state);
  });
});

bean.on(window, 'resize', function(){
  const viewPortSize = utils.viewPort();

  // update state with new size
  state = setSizeAction(viewPortSize, state);

  // and update the canvas
  utils.setDim(window.$c, viewPortSize);
});
