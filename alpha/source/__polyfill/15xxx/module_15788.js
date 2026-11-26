// Module ID: 15788
// Function ID: 15789
// Dependencies: [15735, 15786, 15769]

// Module 15788
import _mod15735 from "module_15735" /* 15735 */;
import _mod15769 from "module_15769" /* 15769 */;
import defineProperty2 from "defineProperty2" /* 15786 */;


export default _mod15735 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15769(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
