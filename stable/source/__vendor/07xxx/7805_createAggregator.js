// Module ID: 7805
// Function ID: 7806
// Name: createAggregator
// Dependencies: [514, 7806, 7807, 595]

// Module 7805 (createAggregator)
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 595 */;


export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    let tmpResult;
    if (_mod514(arg0)) {
      tmpResult = tmp(7806);
    } else {
      tmpResult = tmp(7807);
    }
    const tmp4 = closure_1 ? closure_1() : {};
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), tmp4);
  };
};
