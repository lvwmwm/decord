// Module ID: 20482
// Function ID: 20483
// Name: createCompounder
// Dependencies: [20483, 20490]

// Module 20482 (createCompounder)
import createCompounder from "createCompounder" /* 20483 */;
import capitalize from "capitalize" /* 20490 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
