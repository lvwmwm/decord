// Module ID: 18816
// Function ID: 18817
// Name: createCompounder
// Dependencies: [18817, 18825]

// Module 18816 (createCompounder)
import createCompounder from "createCompounder" /* 18817 */;
import capitalize from "capitalize" /* 18825 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
