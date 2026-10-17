// Module ID: 15376
// Function ID: 15377
// Dependencies: [15323, 15374, 15357]

// Module 15376
import _mod15323 from "module_15323" /* 15323 */;
import _mod15357 from "module_15357" /* 15357 */;
import defineProperty2 from "defineProperty2" /* 15374 */;


export default _mod15323 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15357(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
