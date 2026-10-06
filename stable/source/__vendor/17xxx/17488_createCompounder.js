// Module ID: 17488
// Function ID: 17489
// Name: createCompounder
// Dependencies: [17489, 17497]

// Module 17488 (createCompounder)
import createCompounder from "createCompounder" /* 17489 */;
import capitalize from "capitalize" /* 17497 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
