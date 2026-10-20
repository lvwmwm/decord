// Module ID: 14612
// Function ID: 14613
// Dependencies: [14559, 14610, 14593]

// Module 14612
import _mod14559 from "module_14559" /* 14559 */;
import _mod14593 from "module_14593" /* 14593 */;
import defineProperty2 from "defineProperty2" /* 14610 */;


export default _mod14559 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14593(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
