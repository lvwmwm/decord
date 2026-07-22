// Module ID: 4285
// Function ID: 37493
// Name: overRest
// Dependencies: []

// Module 4285 (overRest)

export default function overRest(arg0, arg1, arg2) {
  let diff = arg1;
  const require = arg0;
  let closure_1 = arg1;
  const max = arg2;
  if (undefined === arg1) {
    diff = arg0.length - 1;
  }
  closure_1 = max(diff, 0);
  return function() {
    const tmp = arg2(arguments.length - closure_1, 0);
    const ArrayResult = Array(tmp);
    for (let num = 0; num < tmp; num = num + 1) {
      let tmp3 = closure_1;
      ArrayResult[num] = arguments[closure_1 + num];
    }
    const ArrayResult1 = Array(closure_1 + 1);
    let num2 = 0;
    if (0 < closure_1) {
      do {
        ArrayResult1[num2] = arguments[num2];
        num2 = num2 + 1;
        let tmp5 = closure_1;
      } while (num2 < closure_1);
    }
    ArrayResult1[closure_1] = arg2(ArrayResult);
    return arg0(closure_1[0])(arg0, this, ArrayResult1);
  };
};
