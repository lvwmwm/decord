// Module ID: 18486
// Function ID: 18487
// Name: createCompounder
// Dependencies: [18487, 18495]

// Module 18486 (createCompounder)
import createCompounder from "createCompounder" /* 18487 */;
import capitalize from "capitalize" /* 18495 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
