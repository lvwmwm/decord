// Module ID: 20297
// Function ID: 20298
// Name: createCompounder
// Dependencies: [20298, 20305]

// Module 20297 (createCompounder)
import createCompounder from "createCompounder" /* 20298 */;
import capitalize from "capitalize" /* 20305 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
