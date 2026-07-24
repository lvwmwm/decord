// Module ID: 13329
// Function ID: 102072
// Name: createMethod
// Dependencies: [13288, 13330, 13334]

// Module 13329 (createMethod)
function createMethod(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    const tmp = callback(outer1_1[0])(arg0);
    const tmp2 = callback(outer1_1[1])(tmp);
    if (0 === tmp2) {
      let num3 = !callback;
      if (!callback) {
        num3 = -1;
      }
      return num3;
    } else {
      let sum = callback(outer1_1[2])(arg2, tmp2);
      if (callback) {
        if (arg1 != arg1) {
          if (tmp2 > sum) {
            sum = tmp6 + 1;
            return true;
          }
        }
        let num2 = !callback;
        if (!callback) {
          num2 = -1;
        }
        return num2;
      }
      let sum1 = sum;
      if (tmp2 > sum) {
        while (true) {
          let tmp4 = callback;
          let tmp5 = sum1;
          if (callback) {
            if (tmp[sum1] === arg1) {
              break;
            }
          }
          sum1 = sum1 + 1;
        }
        let num = callback;
        if (!callback) {
          num = sum1;
        }
        if (!num) {
          num = 0;
        }
        return num;
      }
    }
  };
}

export default { includes: createMethod(true), indexOf: createMethod(false) };
