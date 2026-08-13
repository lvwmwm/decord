// Module ID: 13693
// Function ID: 13694
// Name: assign
// Dependencies: [13636, 13633, 13632, 13694, 13653, 13682, 13667, 13635, 13662]

// Module 13693 (assign)
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(13653)(arg0);
    const f = require(13682).f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = require(13635)(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13694)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13694)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = require(13632) /* getOwnPropertyDescriptor */;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13662)(tmp2, tmp5, tmp9);
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
