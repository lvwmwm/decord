// Module ID: 18803
// Function ID: 18804
// Name: createCompounder
// Dependencies: [18804, 18812]

// Module 18803 (createCompounder)
import createCompounder from "createCompounder" /* 18804 */;
import capitalize from "capitalize" /* 18812 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
