// Module ID: 16838
// Function ID: 16839
// Dependencies: [16785, 16836, 16819]

// Module 16838
import _mod16785 from "module_16785" /* 16785 */;
import _mod16819 from "module_16819" /* 16819 */;
import defineProperty2 from "defineProperty2" /* 16836 */;


export default _mod16785 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16819(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
