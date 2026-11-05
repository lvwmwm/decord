// Module ID: 16442
// Function ID: 16443
// Dependencies: [16389, 16440, 16423]

// Module 16442
import _mod16389 from "module_16389" /* 16389 */;
import _mod16423 from "module_16423" /* 16423 */;
import defineProperty2 from "defineProperty2" /* 16440 */;


export default _mod16389 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16423(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
