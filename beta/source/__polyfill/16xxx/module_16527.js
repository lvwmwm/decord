// Module ID: 16527
// Function ID: 16528
// Dependencies: [16474, 16525, 16508]

// Module 16527
import _mod16474 from "module_16474" /* 16474 */;
import _mod16508 from "module_16508" /* 16508 */;
import defineProperty2 from "defineProperty2" /* 16525 */;


export default _mod16474 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16508(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
