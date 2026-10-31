// Module ID: 19847
// Function ID: 19848
// Name: createCompounder
// Dependencies: [19848, 19855]

// Module 19847 (createCompounder)
import createCompounder from "createCompounder" /* 19848 */;
import capitalize from "capitalize" /* 19855 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
