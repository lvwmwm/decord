// Module ID: 13817
// Function ID: 13818
// Dependencies: [13808, 13818, 13816, 13819]

// Module 13817
import _mod13808 from "module_13808" /* 13808 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13818 from "module_13818" /* 13818 */;

let tmp;
const _mod13819 = tmp(13819);

export default _mod13808 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod13818("Symbol");
  let tmpResultResult = _mod13816(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod13819;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
