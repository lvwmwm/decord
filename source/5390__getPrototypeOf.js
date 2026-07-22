// Module ID: 5390
// Function ID: 46207
// Name: _getPrototypeOf
// Dependencies: []

// Module 5390 (_getPrototypeOf)
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    let fn = getPrototypeOf.bind();
  } else {
    fn = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  const _getPrototypeOf = fn;
  module.exports = fn;
  return _getPrototypeOf(arg0);
}

export default _getPrototypeOf;
