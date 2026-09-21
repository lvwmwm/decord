// Module ID: 14607
// Function ID: 14608
// Dependencies: [14598, 14608, 14606, 14609]

// Module 14607
import _mod14598 from "module_14598" /* 14598 */;
import _mod14606 from "module_14606" /* 14606 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14609 from "module_14609" /* 14609 */;


export default _mod14598 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14608("Symbol");
  let tmpResultResult = _mod14606(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14609(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14609;
  }
  return tmpResultResult;
});
