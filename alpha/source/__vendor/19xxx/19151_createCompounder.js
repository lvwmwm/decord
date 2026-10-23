// Module ID: 19151
// Function ID: 19152
// Name: createCompounder
// Dependencies: [19152, 19160]

// Module 19151 (createCompounder)
import createCompounder from "createCompounder" /* 19152 */;
import capitalize from "capitalize" /* 19160 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
