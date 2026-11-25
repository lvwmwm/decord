// Module ID: 19921
// Function ID: 19922
// Name: createCompounder
// Dependencies: [19922, 19929]

// Module 19921 (createCompounder)
import createCompounder from "createCompounder" /* 19922 */;
import capitalize from "capitalize" /* 19929 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
