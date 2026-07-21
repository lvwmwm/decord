// Module ID: 5149
// Function ID: 43634
// Name: _typeof
// Dependencies: []

// Module 5149 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    const _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      let fn = (arg0) => typeof arg0;
    }
    const _typeof = fn;
    tmp.exports = fn;
    return _typeof(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}

export default _typeof;
