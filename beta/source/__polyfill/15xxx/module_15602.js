// Module ID: 15602
// Function ID: 15603
// Dependencies: [15549, 15600, 15583]

// Module 15602
import _mod15549 from "module_15549" /* 15549 */;
import _mod15583 from "module_15583" /* 15583 */;
import defineProperty2 from "defineProperty2" /* 15600 */;


export default _mod15549 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15583(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
