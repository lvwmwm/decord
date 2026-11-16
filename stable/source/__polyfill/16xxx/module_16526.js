// Module ID: 16526
// Function ID: 16527
// Dependencies: [16473, 16524, 16507]

// Module 16526
import _mod16473 from "module_16473" /* 16473 */;
import _mod16507 from "module_16507" /* 16507 */;
import defineProperty2 from "defineProperty2" /* 16524 */;


export default _mod16473 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16507(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
