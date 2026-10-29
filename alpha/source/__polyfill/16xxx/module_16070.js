// Module ID: 16070
// Function ID: 16071
// Dependencies: [16061, 16071, 16069, 16072]

// Module 16070
import _mod16061 from "module_16061" /* 16061 */;
import _mod16069 from "module_16069" /* 16069 */;
import _mod16071 from "module_16071" /* 16071 */;

let tmp;
const _mod16072 = tmp(16072);

export default _mod16061 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16071("Symbol");
  let tmpResultResult = _mod16069(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16072;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
