// Module ID: 5193
// Function ID: 5194
// Name: basePick
// Dependencies: [5194, 640]

// Module 5193 (basePick)
import hasIn from "hasIn" /* 640 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};
