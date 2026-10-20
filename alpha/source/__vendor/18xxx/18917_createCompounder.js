// Module ID: 18917
// Function ID: 18918
// Name: createCompounder
// Dependencies: [18918, 18926]

// Module 18917 (createCompounder)
import createCompounder from "createCompounder" /* 18918 */;
import capitalize from "capitalize" /* 18926 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
