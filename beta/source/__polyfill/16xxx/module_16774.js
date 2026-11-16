// Module ID: 16774
// Function ID: 16775
// Dependencies: [16765, 16775, 16773, 16776]

// Module 16774
import _mod16765 from "module_16765" /* 16765 */;
import _mod16773 from "module_16773" /* 16773 */;
import _mod16775 from "module_16775" /* 16775 */;

let tmp;
const _mod16776 = tmp(16776);

export default _mod16765 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16775("Symbol");
  let tmpResultResult = _mod16773(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16776;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
