// Module ID: 7887
// Function ID: 7888
// Name: createAggregator
// Dependencies: [514, 7888, 7889, 596]

// Module 7887 (createAggregator)
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 596 */;


export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    let tmpResult;
    if (_mod514(arg0)) {
      tmpResult = tmp(7888);
    } else {
      tmpResult = tmp(7889);
    }
    const tmp4 = closure_1 ? closure_1() : {};
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), tmp4);
  };
};
