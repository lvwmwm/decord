// Module ID: 16179
// Function ID: 16180
// Dependencies: [16126, 16177, 16160]

// Module 16179
import _mod16126 from "module_16126" /* 16126 */;
import _mod16160 from "module_16160" /* 16160 */;
import defineProperty2 from "defineProperty2" /* 16177 */;


export default _mod16126 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16160(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
