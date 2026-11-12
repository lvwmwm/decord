// Module ID: 20477
// Function ID: 20478
// Name: createCompounder
// Dependencies: [20478, 20485]

// Module 20477 (createCompounder)
import createCompounder from "createCompounder" /* 20478 */;
import capitalize from "capitalize" /* 20485 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
