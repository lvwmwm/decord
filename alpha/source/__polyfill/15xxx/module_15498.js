// Module ID: 15498
// Function ID: 15499
// Dependencies: [15445, 15496, 15479]

// Module 15498
import _mod15445 from "module_15445" /* 15445 */;
import _mod15479 from "module_15479" /* 15479 */;
import defineProperty2 from "defineProperty2" /* 15496 */;


export default _mod15445 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15479(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
