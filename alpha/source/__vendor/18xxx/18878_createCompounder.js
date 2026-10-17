// Module ID: 18878
// Function ID: 18879
// Name: createCompounder
// Dependencies: [18879, 18887]

// Module 18878 (createCompounder)
import createCompounder from "createCompounder" /* 18879 */;
import capitalize from "capitalize" /* 18887 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
