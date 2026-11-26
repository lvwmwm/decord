// Module ID: 20124
// Function ID: 20125
// Name: createCompounder
// Dependencies: [20125, 20132]

// Module 20124 (createCompounder)
import createCompounder from "createCompounder" /* 20125 */;
import capitalize from "capitalize" /* 20132 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
