import _assign from 'lodash/assign';
const viewPort = () => {
  var e = window
    , a = 'inner';
  if ( !( 'innerWidth' in window ) ) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ]};
};

const setDim = ($c, dim) => {
  _assign($c.style, dim);
  _assign($c, dim);
  console.log('set new size to the canvas');
};

export default {
  viewPort,
  setDim
};
