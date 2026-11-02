// Module ID: 19854
// Function ID: 19855
// Name: createCompounder
// Dependencies: [19855, 19862]

// Module 19854 (createCompounder)
import createCompounder from "createCompounder" /* 19855 */;
import capitalize from "capitalize" /* 19862 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
