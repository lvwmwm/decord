// Module ID: 19786
// Function ID: 19787
// Name: createCompounder
// Dependencies: [19787, 19794]

// Module 19786 (createCompounder)
import createCompounder from "createCompounder" /* 19787 */;
import capitalize from "capitalize" /* 19794 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
