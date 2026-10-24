// Module ID: 15596
// Function ID: 15597
// Dependencies: [15543, 15594, 15577]

// Module 15596
import _mod15543 from "module_15543" /* 15543 */;
import _mod15577 from "module_15577" /* 15577 */;
import defineProperty2 from "defineProperty2" /* 15594 */;


export default _mod15543 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15577(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
