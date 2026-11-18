// Module ID: 7750
// Function ID: 7751
// Name: baseAggregator
// Dependencies: [516]

// Module 7750 (baseAggregator)
import createBaseEach from "createBaseEach" /* 516 */;


export default function baseAggregator(arg0, arg1, arg2, arg3) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  createBaseEach(arg0, (arg0, arg1, arg2) => {
    closure_0(closure_2, arg0, closure_1(arg0), arg2);
  });
  return arg3;
};
