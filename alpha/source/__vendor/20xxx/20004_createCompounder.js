// Module ID: 20004
// Function ID: 20005
// Name: createCompounder
// Dependencies: [20005, 20012]

// Module 20004 (createCompounder)
import createCompounder from "createCompounder" /* 20005 */;
import capitalize from "capitalize" /* 20012 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
