// Module ID: 5432
// Function ID: 46374
// Name: _setPrototypeOf
// Dependencies: []

// Module 5432 (_setPrototypeOf)
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
