// Module ID: 20300
// Function ID: 20301
// Name: createCompounder
// Dependencies: [20301, 20308]

// Module 20300 (createCompounder)
import createCompounder from "createCompounder" /* 20301 */;
import capitalize from "capitalize" /* 20308 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
