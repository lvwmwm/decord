// Module ID: 19494
// Function ID: 19495
// Name: createCompounder
// Dependencies: [19495, 19502]

// Module 19494 (createCompounder)
import createCompounder from "createCompounder" /* 19495 */;
import capitalize from "capitalize" /* 19502 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
