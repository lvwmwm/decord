// Module ID: 18350
// Function ID: 18351
// Name: createCompounder
// Dependencies: [18351, 18359]

// Module 18350 (createCompounder)
import createCompounder from "createCompounder" /* 18351 */;
import capitalize from "capitalize" /* 18359 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
