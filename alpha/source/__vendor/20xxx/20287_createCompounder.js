// Module ID: 20287
// Function ID: 20288
// Name: createCompounder
// Dependencies: [20288, 20295]

// Module 20287 (createCompounder)
import createCompounder from "createCompounder" /* 20288 */;
import capitalize from "capitalize" /* 20295 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
