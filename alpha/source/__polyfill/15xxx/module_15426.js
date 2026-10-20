// Module ID: 15426
// Function ID: 15427
// Dependencies: [15373, 15424, 15407]

// Module 15426
import _mod15373 from "module_15373" /* 15373 */;
import _mod15407 from "module_15407" /* 15407 */;
import defineProperty2 from "defineProperty2" /* 15424 */;


export default _mod15373 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15407(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
