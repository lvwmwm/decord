// Module ID: 13347
// Function ID: 102121
// Name: assign
// Dependencies: [13290, 13287, 13286, 13348, 13307, 13336, 13321, 13289, 13316]

// Module 13347 (assign)
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(13307)(arg0);
    const length = arguments.length;
    const f = require(13336).f;
    let num = 1;
    if (length > 1) {
      do {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let tmp5 = +num;
        num = tmp5 + 1;
        let tmp6 = require(13289)(arguments[tmp5]);
        if (f) {
          let tmp9 = callback;
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let tmp12 = require(13348) /* items */(tmp6);
          let arr = callback(tmp12, f(tmp6));
        } else {
          let tmp7 = require;
          let tmp8 = dependencyMap;
          arr = require(13348) /* items */(tmp6);
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
            let tmp17 = require(13286) /* getOwnPropertyDescriptor */;
            if (tmp17) {
              let tmp18 = require;
              let tmp19 = dependencyMap;
              tmp17 = !require(13316) /* call */(tmp2, tmp6, tmp14);
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
