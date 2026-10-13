// Module ID: 14899
// Function ID: 14900
// Dependencies: [14890, 14900, 14898, 14901]

// Module 14899
import _mod14890 from "module_14890" /* 14890 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14900 from "module_14900" /* 14900 */;

let tmp;
const _mod14901 = tmp(14901);

export default _mod14890 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14900("Symbol");
  let tmpResultResult = _mod14898(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14901;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
