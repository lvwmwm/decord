// Module ID: 18761
// Function ID: 18762
// Name: createCompounder
// Dependencies: [18762, 18770]

// Module 18761 (createCompounder)
import createCompounder from "createCompounder" /* 18762 */;
import capitalize from "capitalize" /* 18770 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
