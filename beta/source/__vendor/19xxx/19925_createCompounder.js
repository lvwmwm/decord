// Module ID: 19925
// Function ID: 19926
// Name: createCompounder
// Dependencies: [19926, 19933]

// Module 19925 (createCompounder)
import createCompounder from "createCompounder" /* 19926 */;
import capitalize from "capitalize" /* 19933 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
