// Module ID: 18131
// Function ID: 18132
// Dependencies: [18132, 18140]

// Module 18131
import _mod18132 from "module_18132" /* 18132 */;
import capitalize from "capitalize" /* 18140 */;


export default _mod18132((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
