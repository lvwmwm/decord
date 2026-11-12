// Module ID: 16680
// Function ID: 16681
// Dependencies: [16627, 16678, 16661]

// Module 16680
import _mod16627 from "module_16627" /* 16627 */;
import _mod16661 from "module_16661" /* 16661 */;
import defineProperty2 from "defineProperty2" /* 16678 */;


export default _mod16627 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16661(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
