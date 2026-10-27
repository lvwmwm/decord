// Module ID: 19193
// Function ID: 19194
// Name: createCompounder
// Dependencies: [19194, 19201]

// Module 19193 (createCompounder)
import createCompounder from "createCompounder" /* 19194 */;
import capitalize from "capitalize" /* 19201 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
