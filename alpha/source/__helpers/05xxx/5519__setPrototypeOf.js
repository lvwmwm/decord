// Module ID: 5519
// Function ID: 5520
// Name: _setPrototypeOf
// Dependencies: []

// Module 5519 (_setPrototypeOf)
function _setPrototypeOf(arg0, arg1) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    exports = setPrototypeOf.bind();
  } else {
    exports = (arg0, arg1) => {
      arg0.__proto__ = arg1;
      return arg0;
    };
  }
  module.exports = exports;
  return exports(arg0, arg1);
}
exports = _setPrototypeOf;

export default _setPrototypeOf;
