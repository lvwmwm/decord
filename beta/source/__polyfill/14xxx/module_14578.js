// Module ID: 14578
// Function ID: 14579
// Dependencies: [14569, 14579, 14577, 14580]

// Module 14578
import _mod14569 from "module_14569" /* 14569 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14579 from "module_14579" /* 14579 */;

let tmp;
const _mod14580 = tmp(14580);

export default _mod14569 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14579("Symbol");
  let tmpResultResult = _mod14577(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14580;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
