// Module ID: 16497
// Function ID: 16498
// Dependencies: [16444, 16495, 16478]

// Module 16497
import _mod16444 from "module_16444" /* 16444 */;
import _mod16478 from "module_16478" /* 16478 */;
import defineProperty2 from "defineProperty2" /* 16495 */;


export default _mod16444 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16478(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
