// Module ID: 15592
// Function ID: 15593
// Dependencies: [15539, 15590, 15573]

// Module 15592
import _mod15539 from "module_15539" /* 15539 */;
import _mod15573 from "module_15573" /* 15573 */;
import defineProperty2 from "defineProperty2" /* 15590 */;


export default _mod15539 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15573(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
