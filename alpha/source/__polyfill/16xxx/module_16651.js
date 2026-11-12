// Module ID: 16651
// Function ID: 16652
// Dependencies: [16642, 16652, 16650, 16653]

// Module 16651
import _mod16642 from "module_16642" /* 16642 */;
import _mod16650 from "module_16650" /* 16650 */;
import _mod16652 from "module_16652" /* 16652 */;

let tmp;
const _mod16653 = tmp(16653);

export default _mod16642 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16652("Symbol");
  let tmpResultResult = _mod16650(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16653;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
