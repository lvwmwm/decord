// Module ID: 15863
// Function ID: 15864
// Dependencies: [15810, 15861, 15844]

// Module 15863
import _mod15810 from "module_15810" /* 15810 */;
import _mod15844 from "module_15844" /* 15844 */;
import defineProperty2 from "defineProperty2" /* 15861 */;


export default _mod15810 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15844(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
