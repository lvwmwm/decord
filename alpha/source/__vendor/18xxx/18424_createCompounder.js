// Module ID: 18424
// Function ID: 18425
// Name: createCompounder
// Dependencies: [18425, 18433]

// Module 18424 (createCompounder)
import createCompounder from "createCompounder" /* 18425 */;
import capitalize from "capitalize" /* 18433 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
