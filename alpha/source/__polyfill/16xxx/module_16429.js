// Module ID: 16429
// Function ID: 16430
// Dependencies: [16376, 16427, 16410]

// Module 16429
import _mod16376 from "module_16376" /* 16376 */;
import _mod16410 from "module_16410" /* 16410 */;
import defineProperty2 from "defineProperty2" /* 16427 */;


export default _mod16376 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16410(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
