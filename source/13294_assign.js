// Module ID: 13294
// Function ID: 101794
// Name: assign
// Dependencies: [13237, 13234, 13233, 13295, 13254, 13283, 13268, 13236, 13263]

// Module 13294 (assign)
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(13254)(arg0);
    const length = arguments.length;
    const f = require(13283).f;
    let num = 1;
    if (length > 1) {
      do {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let tmp5 = +num;
        num = tmp5 + 1;
        let tmp6 = require(13236)(arguments[tmp5]);
        if (f) {
          let tmp9 = callback;
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let tmp12 = require(13295) /* items */(tmp6);
          let arr = callback(tmp12, f(tmp6));
        } else {
          let tmp7 = require;
          let tmp8 = dependencyMap;
          arr = require(13295) /* items */(tmp6);
        }
        let length2 = arr.length;
        let num2 = 0;
        if (length2 > 0) {
          do {
            let tmp13 = +num2;
            num2 = tmp13 + 1;
            let tmp14 = arr[tmp13];
            let tmp15 = require;
            let tmp16 = dependencyMap;
            let tmp17 = require(13233) /* getOwnPropertyDescriptor */;
            if (tmp17) {
              let tmp18 = require;
              let tmp19 = dependencyMap;
              tmp17 = !require(13263) /* call */(tmp2, tmp6, tmp14);
            }
            if (!tmp17) {
              tmp[tmp14] = tmp6[tmp14];
            }
            let tmp20 = tmp14;
          } while (length2 > num2);
        }
      } while (length > num);
    }
    return tmp;
  };
}

export default assign;
