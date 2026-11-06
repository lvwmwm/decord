// Module ID: 16410
// Function ID: 16411
// Dependencies: [16401, 16411, 16409, 16412]

// Module 16410
import _mod16401 from "module_16401" /* 16401 */;
import _mod16409 from "module_16409" /* 16409 */;
import _mod16411 from "module_16411" /* 16411 */;

let tmp;
const _mod16412 = tmp(16412);

export default _mod16401 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16411("Symbol");
  let tmpResultResult = _mod16409(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16412;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
