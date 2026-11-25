// Module ID: 5895
// Function ID: 5896
// Name: basePick
// Dependencies: [5896, 628]

// Module 5895 (basePick)
import hasIn from "hasIn" /* 628 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};
