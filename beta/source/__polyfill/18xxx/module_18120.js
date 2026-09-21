// Module ID: 18120
// Function ID: 18121
// Dependencies: [18121, 18129]

// Module 18120
import _mod18121 from "module_18121" /* 18121 */;
import capitalize from "capitalize" /* 18129 */;


export default _mod18121((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
