// Module ID: 18522
// Function ID: 18523
// Name: createCompounder
// Dependencies: [18523, 18531]

// Module 18522 (createCompounder)
import createCompounder from "createCompounder" /* 18523 */;
import capitalize from "capitalize" /* 18531 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
