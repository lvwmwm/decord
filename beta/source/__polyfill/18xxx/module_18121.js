// Module ID: 18121
// Function ID: 18122
// Dependencies: [18122, 18130]

// Module 18121
import _mod18122 from "module_18122" /* 18122 */;
import capitalize from "capitalize" /* 18130 */;


export default _mod18122((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
