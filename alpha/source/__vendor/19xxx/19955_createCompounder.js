// Module ID: 19955
// Function ID: 19956
// Name: createCompounder
// Dependencies: [19956, 19963]

// Module 19955 (createCompounder)
import createCompounder from "createCompounder" /* 19956 */;
import capitalize from "capitalize" /* 19963 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
