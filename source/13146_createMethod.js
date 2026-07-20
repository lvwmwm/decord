// Module ID: 13146
// Function ID: 99511
// Name: createMethod
// Dependencies: []

// Module 13146 (createMethod)
function createMethod(arg0) {
  const require = arg0;
  return (arg0, arg1, arg2) => {
    const tmp = arg0(closure_1[0])(arg0);
    const tmp2 = arg0(closure_1[1])(tmp);
    if (0 === tmp2) {
      let num3 = !arg0;
      if (!arg0) {
        num3 = -1;
      }
      return num3;
    } else {
      let sum = arg0(closure_1[2])(arg2, tmp2);
      if (arg0) {
        if (arg1 != arg1) {
          if (tmp2 > sum) {
            sum = tmp6 + 1;
            return true;
          }
        }
        let num2 = !arg0;
        if (!arg0) {
          num2 = -1;
        }
        return num2;
      }
      let sum1 = sum;
      if (tmp2 > sum) {
        while (true) {
          let tmp4 = arg0;
          let tmp5 = sum1;
          if (arg0) {
            if (tmp[sum1] === arg1) {
              break;
            }
          }
          sum1 = sum1 + 1;
        }
        let num = arg0;
        if (!arg0) {
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
