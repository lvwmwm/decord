// Module ID: 8741
// Function ID: 8742
// Dependencies: [514, 8742, 8743, 588]

// Module 8741
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 588 */;


export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = tmp(8742);
    } else {
      tmpResult = tmp(8743);
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
};
