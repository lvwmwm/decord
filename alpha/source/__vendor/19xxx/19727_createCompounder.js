// Module ID: 19727
// Function ID: 19728
// Name: createCompounder
// Dependencies: [19728, 19735]

// Module 19727 (createCompounder)
import createCompounder from "createCompounder" /* 19728 */;
import capitalize from "capitalize" /* 19735 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
