// Module ID: 19107
// Function ID: 19108
// Name: createCompounder
// Dependencies: [19108, 19116]

// Module 19107 (createCompounder)
import createCompounder from "createCompounder" /* 19108 */;
import capitalize from "capitalize" /* 19116 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
