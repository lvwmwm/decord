// Module ID: 4289
// Function ID: 37526
// Name: overRest
// Dependencies: [4290]

// Module 4289 (overRest)

export default function overRest(arg0, arg1, arg2) {
  let diff = arg1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (undefined === arg1) {
    diff = arg0.length - 1;
  }
  closure_1 = closure_2(diff, 0);
  return function() {
    const tmp = callback2(arguments.length - table, 0);
    const ArrayResult = Array(tmp);
    for (let num = 0; num < tmp; num = num + 1) {
      let tmp3 = table;
      ArrayResult[num] = arguments[table + num];
    }
    const ArrayResult1 = Array(table + 1);
    let num2 = 0;
    if (0 < table) {
      do {
        ArrayResult1[num2] = arguments[num2];
        num2 = num2 + 1;
        let tmp5 = table;
      } while (num2 < table);
    }
    ArrayResult1[table] = callback2(ArrayResult);
    return callback(table[0])(callback, this, ArrayResult1);
  };
};
