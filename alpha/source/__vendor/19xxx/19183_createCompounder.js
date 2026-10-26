// Module ID: 19183
// Function ID: 19184
// Name: createCompounder
// Dependencies: [19184, 19191]

// Module 19183 (createCompounder)
import createCompounder from "createCompounder" /* 19184 */;
import capitalize from "capitalize" /* 19191 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
