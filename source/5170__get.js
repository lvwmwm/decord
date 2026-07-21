// Module ID: 5170
// Function ID: 43840
// Name: _get
// Dependencies: []

// Module 5170 (_get)
function _get() {
  if ("undefined" !== typeof Reflect) {
    const _Reflect = Reflect;
    if (Reflect.get) {
      const _Reflect2 = Reflect;
      let fn = get.bind();
    }
    const _get = fn;
    tmp.exports = fn;
    return _get(...arguments);
  }
  fn = (arg0, arg1, arg2) => {
    let tmp = arg2;
    const tmp2 = callback(closure_2[0])(arg0, arg1);
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
