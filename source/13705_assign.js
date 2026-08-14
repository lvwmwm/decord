// Module ID: 13705
// Function ID: 13706
// Name: assign
// Dependencies: [13648, 13645, 13644, 13706, 13665, 13694, 13679, 13647, 13674]

// Module 13705 (assign)
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(13665)(arg0);
    const f = require(13694).f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = require(13647)(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13706)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13706)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = require(13644) /* getOwnPropertyDescriptor */;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13674)(tmp2, tmp5, tmp9);
        }
        if (!tmp12) {
          tmp[tmp9] = tmp5[tmp9];
        }
      }
    }
    return tmp;
  };
}

export default assign;
