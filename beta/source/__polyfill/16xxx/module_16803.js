// Module ID: 16803
// Function ID: 16804
// Dependencies: [16750, 16801, 16784]

// Module 16803
import _mod16750 from "module_16750" /* 16750 */;
import _mod16784 from "module_16784" /* 16784 */;
import defineProperty2 from "defineProperty2" /* 16801 */;


export default _mod16750 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16784(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
