// Module ID: 19017
// Function ID: 19018
// Name: createCompounder
// Dependencies: [19018, 19026]

// Module 19017 (createCompounder)
import createCompounder from "createCompounder" /* 19018 */;
import capitalize from "capitalize" /* 19026 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
