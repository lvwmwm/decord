// Module ID: 13173
// Function ID: 99605
// Name: assign
// Dependencies: []

// Module 13173 (assign)
let closure_4 = require(dependencyMap[0])([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = require(dependencyMap[4])(arg0);
    const length = arguments.length;
    const f = require(dependencyMap[5]).f;
    let num = 1;
    if (length > 1) {
      do {
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let tmp5 = +num;
        num = tmp5 + 1;
        let tmp6 = closure_0(closure_1[7])(arguments[tmp5]);
        if (f) {
          let tmp9 = closure_4;
          let tmp10 = closure_0;
          let tmp11 = closure_1;
          let tmp12 = closure_0(closure_1[3])(tmp6);
          let arr = closure_4(tmp12, f(tmp6));
        } else {
          let tmp7 = closure_0;
          let tmp8 = closure_1;
          arr = closure_0(closure_1[3])(tmp6);
        }
        let length2 = arr.length;
        let num2 = 0;
        if (length2 > 0) {
          do {
            let tmp13 = +num2;
            num2 = tmp13 + 1;
            let tmp14 = arr[tmp13];
            let tmp15 = closure_0;
            let tmp16 = closure_1;
            let tmp17 = closure_0(closure_1[2]);
            if (tmp17) {
              let tmp18 = closure_0;
              let tmp19 = closure_1;
              tmp17 = !closure_0(closure_1[8])(tmp2, tmp6, tmp14);
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
