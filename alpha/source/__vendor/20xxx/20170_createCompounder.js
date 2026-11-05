// Module ID: 20170
// Function ID: 20171
// Name: createCompounder
// Dependencies: [20171, 20178]

// Module 20170 (createCompounder)
import createCompounder from "createCompounder" /* 20171 */;
import capitalize from "capitalize" /* 20178 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
