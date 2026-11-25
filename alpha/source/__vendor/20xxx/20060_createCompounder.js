// Module ID: 20060
// Function ID: 20061
// Name: createCompounder
// Dependencies: [20061, 20068]

// Module 20060 (createCompounder)
import createCompounder from "createCompounder" /* 20061 */;
import capitalize from "capitalize" /* 20068 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
