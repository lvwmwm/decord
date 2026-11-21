// Module ID: 19913
// Function ID: 19914
// Name: createCompounder
// Dependencies: [19914, 19921]

// Module 19913 (createCompounder)
import createCompounder from "createCompounder" /* 19914 */;
import capitalize from "capitalize" /* 19921 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
