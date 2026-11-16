// Module ID: 20635
// Function ID: 20636
// Name: createCompounder
// Dependencies: [20636, 20643]

// Module 20635 (createCompounder)
import createCompounder from "createCompounder" /* 20636 */;
import capitalize from "capitalize" /* 20643 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
