// Module ID: 16487
// Function ID: 16488
// Dependencies: [16434, 16485, 16468]

// Module 16487
import _mod16434 from "module_16434" /* 16434 */;
import _mod16468 from "module_16468" /* 16468 */;
import defineProperty2 from "defineProperty2" /* 16485 */;


export default _mod16434 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod16468(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
