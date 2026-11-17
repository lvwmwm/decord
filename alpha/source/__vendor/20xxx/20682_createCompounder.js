// Module ID: 20682
// Function ID: 20683
// Name: createCompounder
// Dependencies: [20683, 20690]

// Module 20682 (createCompounder)
import createCompounder from "createCompounder" /* 20683 */;
import capitalize from "capitalize" /* 20690 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
