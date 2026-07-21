// Module ID: 7466
// Function ID: 59945
// Name: baseMap
// Dependencies: []

// Module 7466 (baseMap)

export default function baseMap(arg0, arg1) {
  const require = arg1;
  let closure_1 = -1;
  if (require(closure_1[0])(arg0)) {
    const _Array = Array;
    let ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  require(closure_1[1])(arg0, (arg0, arg1, arg2) => {
    const sum = closure_1 + 1;
    closure_1 = sum;
    ArrayResult[sum] = arg1(arg0, arg1, arg2);
  });
  return ArrayResult;
};
