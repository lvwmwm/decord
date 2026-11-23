// Module ID: 19912
// Function ID: 19913
// Name: createCompounder
// Dependencies: [19913, 19920]

// Module 19912 (createCompounder)
import createCompounder from "createCompounder" /* 19913 */;
import capitalize from "capitalize" /* 19920 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
