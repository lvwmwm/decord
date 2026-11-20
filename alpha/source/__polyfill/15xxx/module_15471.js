// Module ID: 15471
// Function ID: 15472
// Dependencies: [15418, 15469, 15452]

// Module 15471
import _mod15418 from "module_15418" /* 15418 */;
import _mod15452 from "module_15452" /* 15452 */;
import defineProperty2 from "defineProperty2" /* 15469 */;


export default _mod15418 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15452(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
