// Module ID: 17486
// Function ID: 17487
// Name: createCompounder
// Dependencies: [17487, 17495]

// Module 17486 (createCompounder)
import createCompounder from "createCompounder" /* 17487 */;
import capitalize from "capitalize" /* 17495 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
