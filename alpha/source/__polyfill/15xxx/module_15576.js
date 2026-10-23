// Module ID: 15576
// Function ID: 15577
// Dependencies: [15523, 15574, 15557]

// Module 15576
import _mod15523 from "module_15523" /* 15523 */;
import _mod15557 from "module_15557" /* 15557 */;
import defineProperty2 from "defineProperty2" /* 15574 */;


export default _mod15523 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15557(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
