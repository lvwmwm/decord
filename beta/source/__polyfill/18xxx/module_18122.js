// Module ID: 18122
// Function ID: 18123
// Dependencies: [18123, 18131]

// Module 18122
import _mod18123 from "module_18123" /* 18123 */;
import capitalize from "capitalize" /* 18131 */;


export default _mod18123((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
