// Module ID: 15606
// Function ID: 15607
// Dependencies: [15553, 15604, 15587]

// Module 15606
import _mod15553 from "module_15553" /* 15553 */;
import _mod15587 from "module_15587" /* 15587 */;
import defineProperty2 from "defineProperty2" /* 15604 */;


export default _mod15553 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15587(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
