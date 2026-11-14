// Module ID: 20632
// Function ID: 20633
// Name: createCompounder
// Dependencies: [20633, 20640]

// Module 20632 (createCompounder)
import createCompounder from "createCompounder" /* 20633 */;
import capitalize from "capitalize" /* 20640 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
