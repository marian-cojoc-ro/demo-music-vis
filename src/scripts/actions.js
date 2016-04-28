import _assign from 'lodash/assign';

export const tick = (time, state) => {
  return state;
};

export const setSize = (size, state) => {
  const newConfig = _assign({}, state.config, {canvas: size});
  return _assign({}, state, {config: newConfig});
};

export const testAction = (value, state) => {
  return _assign({}, state, {test: value});
};
