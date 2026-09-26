// Module ID: 14630
// Function ID: 14631
// Dependencies: [14615]

// Module 14630
import _mod14615 from "module_14615" /* 14615 */;

let c0 = 0;
let closure_1 = Math.random();
let closure_2 = _mod14615(1.toString);

export default (arg0) => {
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  const sum = c0 + 1;
  c0 = sum;
  return `Symbol(${str}` + ")_" + closure_2(sum + closure_1, 36);
};
