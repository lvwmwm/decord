// Module ID: 6281
// Function ID: 6282
// Name: _typeof
// Dependencies: []

// Module 6281 (_typeof)
function _typeof(arg0) {
  let tmp = module;
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      exports = (arg0) => typeof arg0;
    }
    tmp.exports = exports;
    return exports(arg0);
  }
  exports = (arg0) => {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
exports = _typeof;

export default _typeof;
