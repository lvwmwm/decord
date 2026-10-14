// Module ID: 14966
// Function ID: 14967
// Dependencies: [14913, 14964, 14947]

// Module 14966
import _mod14913 from "module_14913" /* 14913 */;
import _mod14947 from "module_14947" /* 14947 */;
import defineProperty2 from "defineProperty2" /* 14964 */;


export default _mod14913 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14947(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
