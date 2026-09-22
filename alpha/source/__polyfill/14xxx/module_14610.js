// Module ID: 14610
// Function ID: 14611
// Dependencies: [14601, 14611, 14609, 14612]

// Module 14610
import _mod14601 from "module_14601" /* 14601 */;
import _mod14609 from "module_14609" /* 14609 */;
import _mod14611 from "module_14611" /* 14611 */;
import _mod14612 from "module_14612" /* 14612 */;


export default _mod14601 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14611("Symbol");
  let tmpResultResult = _mod14609(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14612(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14612;
  }
  return tmpResultResult;
});
