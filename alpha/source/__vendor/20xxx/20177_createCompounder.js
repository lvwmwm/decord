// Module ID: 20177
// Function ID: 20178
// Name: createCompounder
// Dependencies: [20178, 20185]

// Module 20177 (createCompounder)
import createCompounder from "createCompounder" /* 20178 */;
import capitalize from "capitalize" /* 20185 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
