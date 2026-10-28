// Module ID: 15635
// Function ID: 15636
// Dependencies: [15582, 15633, 15616]

// Module 15635
import _mod15582 from "module_15582" /* 15582 */;
import _mod15616 from "module_15616" /* 15616 */;
import defineProperty2 from "defineProperty2" /* 15633 */;


export default _mod15582 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15616(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
