// Module ID: 6151
// Function ID: 6152
// Name: basePick
// Dependencies: [6152, 628]

// Module 6151 (basePick)
import hasIn from "hasIn" /* 628 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};
