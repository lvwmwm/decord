// Module ID: 14607
// Function ID: 14608
// Dependencies: [14554, 14605, 14588]

// Module 14607
import _mod14554 from "module_14554" /* 14554 */;
import _mod14588 from "module_14588" /* 14588 */;
import defineProperty2 from "defineProperty2" /* 14605 */;


export default _mod14554 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod14588(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
