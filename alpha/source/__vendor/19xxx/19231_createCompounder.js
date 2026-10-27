// Module ID: 19231
// Function ID: 19232
// Name: createCompounder
// Dependencies: [19232, 19239]

// Module 19231 (createCompounder)
import createCompounder from "createCompounder" /* 19232 */;
import capitalize from "capitalize" /* 19239 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
