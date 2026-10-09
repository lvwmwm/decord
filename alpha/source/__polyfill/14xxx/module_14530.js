// Module ID: 14530
// Function ID: 14531
// Dependencies: [14477, 14528, 14511]

// Module 14530
import _mod14477 from "module_14477" /* 14477 */;
import _mod14511 from "module_14511" /* 14511 */;
import defineProperty2 from "defineProperty2" /* 14528 */;


export default _mod14477 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14511(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
