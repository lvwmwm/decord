// Module ID: 15795
// Function ID: 15796
// Dependencies: [15742, 15793, 15776]

// Module 15795
import _mod15742 from "module_15742" /* 15742 */;
import _mod15776 from "module_15776" /* 15776 */;
import defineProperty2 from "defineProperty2" /* 15793 */;


export default _mod15742 ? ((arg0, arg1, arg2) => {
  const obj = defineProperty2;
  return obj.f(arg0, arg1, _mod15776(1, arg2));
}) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
