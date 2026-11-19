// Module ID: 19966
// Function ID: 19967
// Name: createCompounder
// Dependencies: [19967, 19974]

// Module 19966 (createCompounder)
import createCompounder from "createCompounder" /* 19967 */;
import capitalize from "capitalize" /* 19974 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
