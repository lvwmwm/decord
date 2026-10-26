// Module ID: 19184
// Function ID: 19185
// Name: createCompounder
// Dependencies: [19185, 19192]

// Module 19184 (createCompounder)
import createCompounder from "createCompounder" /* 19185 */;
import capitalize from "capitalize" /* 19192 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
