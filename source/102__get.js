// Module ID: 102
// Function ID: 1587
// Name: _get
// Dependencies: [103]

// Module 102 (_get)
function _get() {
  if ("undefined" !== typeof Reflect) {
    const _Reflect = Reflect;
    if (Reflect.get) {
      const _Reflect2 = Reflect;
      let fn = get.bind();
    }
    tmp.exports = fn;
    return fn(...arguments);
  }
  fn = (arg0, arg1, arg2) => {
    let tmp = arg2;
    const tmp2 = outer1_0(outer1_2[0])(arg0, arg1);
    if (tmp2) {
      const _Object = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp2, arg1);
      if (iter.get) {
        const get = iter.get;
        if (arguments.length < 3) {
          tmp = arg0;
        }
        let callResult = get.call(tmp);
      } else {
        callResult = iter.value;
      }
      return callResult;
    }
  };
}

export default _get;
