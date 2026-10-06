// Module ID: 14106
// Function ID: 14107
// Dependencies: [14097, 14107, 14105, 14108]

// Module 14106
import _mod14097 from "module_14097" /* 14097 */;
import _mod14105 from "module_14105" /* 14105 */;
import _mod14107 from "module_14107" /* 14107 */;

let tmp;
const _mod14108 = tmp(14108);

export default _mod14097 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14107("Symbol");
  let tmpResultResult = _mod14105(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14108;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
