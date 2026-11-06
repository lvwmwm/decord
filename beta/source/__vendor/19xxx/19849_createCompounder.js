// Module ID: 19849
// Function ID: 19850
// Name: createCompounder
// Dependencies: [19850, 19857]

// Module 19849 (createCompounder)
import createCompounder from "createCompounder" /* 19850 */;
import capitalize from "capitalize" /* 19857 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
