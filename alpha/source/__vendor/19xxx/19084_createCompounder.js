// Module ID: 19084
// Function ID: 19085
// Name: createCompounder
// Dependencies: [19085, 19093]

// Module 19084 (createCompounder)
import createCompounder from "createCompounder" /* 19085 */;
import capitalize from "capitalize" /* 19093 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
