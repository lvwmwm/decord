// Module ID: 19790
// Function ID: 19791
// Name: createCompounder
// Dependencies: [19791, 19798]

// Module 19790 (createCompounder)
import createCompounder from "createCompounder" /* 19791 */;
import capitalize from "capitalize" /* 19798 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
