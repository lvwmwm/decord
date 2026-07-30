// Module ID: 13421
// Function ID: 13422
// Name: assign
// Dependencies: [13364, 13361, 13360, 13422, 13381, 13410, 13395, 13363, 13390]

// Module 13421 (assign)
let closure_4 = require("call")([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(13381)(arg0);
    const f = require(13410).f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = require(13363)(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(13422)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(13422)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = require(13360) /* getOwnPropertyDescriptor */;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(13390)(tmp2, tmp5, tmp9);
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
