// Module ID: 16685
// Function ID: 16686
// Dependencies: [16632, 16683, 16666]

// Module 16685
import _mod16632 from "module_16632" /* 16632 */;
import _mod16666 from "module_16666" /* 16666 */;
import defineProperty2 from "defineProperty2" /* 16683 */;


export default _mod16632 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16666(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
