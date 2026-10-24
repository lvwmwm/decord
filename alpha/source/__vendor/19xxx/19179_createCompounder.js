// Module ID: 19179
// Function ID: 19180
// Name: createCompounder
// Dependencies: [19180, 19187]

// Module 19179 (createCompounder)
import createCompounder from "createCompounder" /* 19180 */;
import capitalize from "capitalize" /* 19187 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
