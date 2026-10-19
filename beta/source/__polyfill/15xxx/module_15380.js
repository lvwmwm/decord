// Module ID: 15380
// Function ID: 15381
// Dependencies: [15327, 15378, 15361]

// Module 15380
import _mod15327 from "module_15327" /* 15327 */;
import _mod15361 from "module_15361" /* 15361 */;
import defineProperty2 from "defineProperty2" /* 15378 */;


export default _mod15327 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15361(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
