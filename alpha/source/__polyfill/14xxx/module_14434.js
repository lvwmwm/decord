// Module ID: 14434
// Function ID: 14435
// Dependencies: [14381, 14432, 14415]

// Module 14434
import _mod14381 from "module_14381" /* 14381 */;
import _mod14415 from "module_14415" /* 14415 */;
import defineProperty2 from "defineProperty2" /* 14432 */;


export default _mod14381 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14415(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
