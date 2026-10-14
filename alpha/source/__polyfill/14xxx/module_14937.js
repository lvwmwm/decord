// Module ID: 14937
// Function ID: 14938
// Dependencies: [14928, 14938, 14936, 14939]

// Module 14937
import _mod14928 from "module_14928" /* 14928 */;
import _mod14936 from "module_14936" /* 14936 */;
import _mod14938 from "module_14938" /* 14938 */;

let tmp;
const _mod14939 = tmp(14939);

export default _mod14928 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14938("Symbol");
  let tmpResultResult = _mod14936(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14939;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
