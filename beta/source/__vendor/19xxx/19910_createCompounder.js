// Module ID: 19910
// Function ID: 19911
// Name: createCompounder
// Dependencies: [19911, 19918]

// Module 19910 (createCompounder)
import createCompounder from "createCompounder" /* 19911 */;
import capitalize from "capitalize" /* 19918 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
