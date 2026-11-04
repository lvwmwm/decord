// Module ID: 20120
// Function ID: 20121
// Name: createCompounder
// Dependencies: [20121, 20128]

// Module 20120 (createCompounder)
import createCompounder from "createCompounder" /* 20121 */;
import capitalize from "capitalize" /* 20128 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
