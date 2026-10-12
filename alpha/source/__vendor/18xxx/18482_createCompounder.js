// Module ID: 18482
// Function ID: 18483
// Name: createCompounder
// Dependencies: [18483, 18491]

// Module 18482 (createCompounder)
import createCompounder from "createCompounder" /* 18483 */;
import capitalize from "capitalize" /* 18491 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
