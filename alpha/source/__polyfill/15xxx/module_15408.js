// Module ID: 15408
// Function ID: 15409
// Dependencies: [15355, 15406, 15389]

// Module 15408
import _mod15355 from "module_15355" /* 15355 */;
import _mod15389 from "module_15389" /* 15389 */;
import defineProperty2 from "defineProperty2" /* 15406 */;


export default _mod15355 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15389(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
