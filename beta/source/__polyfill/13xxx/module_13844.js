// Module ID: 13844
// Function ID: 13845
// Dependencies: [13791, 13842, 13825]

// Module 13844
import _mod13791 from "module_13791" /* 13791 */;
import _mod13825 from "module_13825" /* 13825 */;
import defineProperty2 from "defineProperty2" /* 13842 */;


export default _mod13791 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod13825(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
