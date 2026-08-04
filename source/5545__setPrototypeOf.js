// Module ID: 5545
// Function ID: 5546
// Name: _setPrototypeOf
// Dependencies: []

// Module 5545 (_setPrototypeOf)
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
  module.exports = fn;
  return fn(arg0, arg1);
}

export default _setPrototypeOf;
