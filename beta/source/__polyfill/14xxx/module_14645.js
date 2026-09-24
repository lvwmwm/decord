// Module ID: 14645
// Function ID: 14646
// Dependencies: [14636, 14646, 14644, 14647]

// Module 14645
import _mod14636 from "module_14636" /* 14636 */;
import _mod14644 from "module_14644" /* 14644 */;
import _mod14646 from "module_14646" /* 14646 */;
import _mod14647 from "module_14647" /* 14647 */;


export default _mod14636 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14646("Symbol");
  let tmpResultResult = _mod14644(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14647(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14647;
  }
  return tmpResultResult;
});
