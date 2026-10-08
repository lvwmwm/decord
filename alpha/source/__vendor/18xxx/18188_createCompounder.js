// Module ID: 18188
// Function ID: 18189
// Name: createCompounder
// Dependencies: [18189, 18197]

// Module 18188 (createCompounder)
import createCompounder from "createCompounder" /* 18189 */;
import capitalize from "capitalize" /* 18197 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
