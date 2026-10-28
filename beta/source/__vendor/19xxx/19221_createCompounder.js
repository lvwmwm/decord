// Module ID: 19221
// Function ID: 19222
// Name: createCompounder
// Dependencies: [19222, 19229]

// Module 19221 (createCompounder)
import createCompounder from "createCompounder" /* 19222 */;
import capitalize from "capitalize" /* 19229 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
