// Module ID: 20134
// Function ID: 20135
// Name: createCompounder
// Dependencies: [20135, 20142]

// Module 20134 (createCompounder)
import createCompounder from "createCompounder" /* 20135 */;
import capitalize from "capitalize" /* 20142 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
