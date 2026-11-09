// Module ID: 20259
// Function ID: 20260
// Name: createCompounder
// Dependencies: [20260, 20267]

// Module 20259 (createCompounder)
import createCompounder from "createCompounder" /* 20260 */;
import capitalize from "capitalize" /* 20267 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
