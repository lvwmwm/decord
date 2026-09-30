// Module ID: 8078
// Function ID: 8079
// Dependencies: [514, 8079, 8080, 584]

// Module 8078
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = tmp(8079);
    } else {
      tmpResult = tmp(8080);
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
};
