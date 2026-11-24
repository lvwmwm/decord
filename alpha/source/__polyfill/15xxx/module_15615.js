// Module ID: 15615
// Function ID: 15616
// Dependencies: [15562, 15613, 15596]

// Module 15615
import _mod15562 from "module_15562" /* 15562 */;
import _mod15596 from "module_15596" /* 15596 */;
import defineProperty2 from "defineProperty2" /* 15613 */;


export default _mod15562 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15596(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
