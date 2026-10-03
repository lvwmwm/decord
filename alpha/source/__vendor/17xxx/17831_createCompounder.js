// Module ID: 17831
// Function ID: 17832
// Name: createCompounder
// Dependencies: [17832, 17840]

// Module 17831 (createCompounder)
import createCompounder from "createCompounder" /* 17832 */;
import capitalize from "capitalize" /* 17840 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
