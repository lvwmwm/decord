// Module ID: 20640
// Function ID: 20641
// Name: createCompounder
// Dependencies: [20641, 20648]

// Module 20640 (createCompounder)
import createCompounder from "createCompounder" /* 20641 */;
import capitalize from "capitalize" /* 20648 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
