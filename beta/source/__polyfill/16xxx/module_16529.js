// Module ID: 16529
// Function ID: 16530
// Dependencies: [16476, 16527, 16510]

// Module 16529
import _mod16476 from "module_16476" /* 16476 */;
import _mod16510 from "module_16510" /* 16510 */;
import defineProperty2 from "defineProperty2" /* 16527 */;


export default _mod16476 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16510(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
