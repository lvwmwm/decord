// Module ID: 5394
// Function ID: 46217
// Name: _setPrototypeOf
// Dependencies: []

// Module 5394 (_setPrototypeOf)
function _setPrototypeOf(arg0, arg1) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    let fn = setPrototypeOf.bind();
  } else {
    fn = (arg0, arg1) => {
      arg0.__proto__ = arg1;
      return arg0;
    };
  }
  const _setPrototypeOf = fn;
  module.exports = fn;
  return _setPrototypeOf(arg0, arg1);
}

export default _setPrototypeOf;
