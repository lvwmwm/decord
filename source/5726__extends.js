// Module ID: 5726
// Function ID: 49241
// Name: _extends
// Dependencies: []

// Module 5726 (_extends)
function _extends() {
  if (Object.assign) {
    const _Object = Object;
    let fn = assign.bind();
  } else {
    fn = (arg0) => {
      for (let num = 1; num < arguments.length; num = num + 1) {
        let tmp3 = arguments[num];
        let tmp4 = tmp3;
        let tmp5 = tmp2;
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp2 = tmp5;
          let tmp7 = keys[tmp];
          while (tmp7 !== undefined) {
            let tmp8 = tmp7;
            let hasOwnProperty = {}.hasOwnProperty;
            tmp5 = tmp7;
            if (!hasOwnProperty.call(tmp3, tmp7)) {
              continue;
            } else {
              arg0[tmp7] = tmp3[tmp7];
              tmp5 = tmp7;
              continue;
            }
            continue;
          }
        }
      }
      return arg0;
    };
  }
  module.exports = fn;
  return fn(...arguments);
}

export default _extends;
