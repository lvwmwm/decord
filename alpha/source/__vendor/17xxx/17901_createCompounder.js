// Module ID: 17901
// Function ID: 17902
// Name: createCompounder
// Dependencies: [17902, 17910]

// Module 17901 (createCompounder)
import createCompounder from "createCompounder" /* 17902 */;
import capitalize from "capitalize" /* 17910 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
