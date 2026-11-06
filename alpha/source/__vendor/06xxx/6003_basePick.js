// Module ID: 6003
// Function ID: 6004
// Name: basePick
// Dependencies: [6004, 628]

// Module 6003 (basePick)
import hasIn from "hasIn" /* 628 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};
