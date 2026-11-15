// Module ID: 20305
// Function ID: 20306
// Name: createCompounder
// Dependencies: [20306, 20313]

// Module 20305 (createCompounder)
import createCompounder from "createCompounder" /* 20306 */;
import capitalize from "capitalize" /* 20313 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
