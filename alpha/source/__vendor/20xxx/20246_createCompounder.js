// Module ID: 20246
// Function ID: 20247
// Name: createCompounder
// Dependencies: [20247, 20254]

// Module 20246 (createCompounder)
import createCompounder from "createCompounder" /* 20247 */;
import capitalize from "capitalize" /* 20254 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
