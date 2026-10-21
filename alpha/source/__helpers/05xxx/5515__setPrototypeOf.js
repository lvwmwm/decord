// Module ID: 5515
// Function ID: 5516
// Name: _setPrototypeOf
// Dependencies: []

// Module 5515 (_setPrototypeOf)
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
