// Module ID: 15542
// Function ID: 15543
// Dependencies: [15489, 15540, 15523]

// Module 15542
import _mod15489 from "module_15489" /* 15489 */;
import _mod15523 from "module_15523" /* 15523 */;
import defineProperty2 from "defineProperty2" /* 15540 */;


export default _mod15489 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15523(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
