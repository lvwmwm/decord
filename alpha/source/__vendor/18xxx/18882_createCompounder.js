// Module ID: 18882
// Function ID: 18883
// Name: createCompounder
// Dependencies: [18883, 18891]

// Module 18882 (createCompounder)
import createCompounder from "createCompounder" /* 18883 */;
import capitalize from "capitalize" /* 18891 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
