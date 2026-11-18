// Module ID: 20638
// Function ID: 20639
// Name: createCompounder
// Dependencies: [20639, 20646]

// Module 20638 (createCompounder)
import createCompounder from "createCompounder" /* 20639 */;
import capitalize from "capitalize" /* 20646 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
