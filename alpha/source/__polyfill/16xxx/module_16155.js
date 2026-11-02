// Module ID: 16155
// Function ID: 16156
// Dependencies: [16146, 16156, 16154, 16157]

// Module 16155
import _mod16146 from "module_16146" /* 16146 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16156 from "module_16156" /* 16156 */;

let tmp;
const _mod16157 = tmp(16157);

export default _mod16146 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16156("Symbol");
  let tmpResultResult = _mod16154(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16157;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
