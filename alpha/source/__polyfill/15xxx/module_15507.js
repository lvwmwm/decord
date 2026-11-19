// Module ID: 15507
// Function ID: 15508
// Dependencies: [15454, 15505, 15488]

// Module 15507
import _mod15454 from "module_15454" /* 15454 */;
import _mod15488 from "module_15488" /* 15488 */;
import defineProperty2 from "defineProperty2" /* 15505 */;


export default _mod15454 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15488(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
