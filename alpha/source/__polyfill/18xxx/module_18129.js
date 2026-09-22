// Module ID: 18129
// Function ID: 18130
// Dependencies: [18130, 18138]

// Module 18129
import _mod18130 from "module_18130" /* 18130 */;
import capitalize from "capitalize" /* 18138 */;


export default _mod18130((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
