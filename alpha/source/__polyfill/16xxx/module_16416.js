// Module ID: 16416
// Function ID: 16417
// Dependencies: [16363, 16414, 16397]

// Module 16416
import _mod16363 from "module_16363" /* 16363 */;
import _mod16397 from "module_16397" /* 16397 */;
import defineProperty2 from "defineProperty2" /* 16414 */;


export default _mod16363 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16397(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
