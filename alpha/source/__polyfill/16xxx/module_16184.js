// Module ID: 16184
// Function ID: 16185
// Dependencies: [16131, 16182, 16165]

// Module 16184
import _mod16131 from "module_16131" /* 16131 */;
import _mod16165 from "module_16165" /* 16165 */;
import defineProperty2 from "defineProperty2" /* 16182 */;


export default _mod16131 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16165(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
