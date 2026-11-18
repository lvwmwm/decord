// Module ID: 15521
// Function ID: 15522
// Dependencies: [15468, 15519, 15502]

// Module 15521
import _mod15468 from "module_15468" /* 15468 */;
import _mod15502 from "module_15502" /* 15502 */;
import defineProperty2 from "defineProperty2" /* 15519 */;


export default _mod15468 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15502(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
