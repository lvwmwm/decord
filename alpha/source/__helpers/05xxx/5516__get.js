// Module ID: 5516
// Function ID: 5517
// Name: _get
// Dependencies: [5517]

// Module 5516 (_get)
import _superPropBase from "_superPropBase" /* 5517 */;

function _get() {
  let tmp = module;
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      exports = get.bind();
    }
    tmp.exports = exports;
    let tmp3 = null;
    return exports(...arguments);
  }
  exports = function(arg0, arg1, arg2) {
    const tmp = _superPropBase(arg0, arg1);
    if (tmp) {
      let callResult;
      const _Object = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, arg1);
      if (iter.get) {
        let tmp3 = arg2;
        const get = iter.get;
        const call = get.call;
        if (arguments.length < 3) {
          tmp3 = arg0;
        }
        callResult = call(tmp3);
      } else {
        callResult = iter.value;
      }
      return callResult;
    }
  };
}
exports = _get;

export default _get;
