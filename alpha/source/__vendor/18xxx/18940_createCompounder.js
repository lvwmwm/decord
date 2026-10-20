// Module ID: 18940
// Function ID: 18941
// Name: createCompounder
// Dependencies: [18941, 18949]

// Module 18940 (createCompounder)
import createCompounder from "createCompounder" /* 18941 */;
import capitalize from "capitalize" /* 18949 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
