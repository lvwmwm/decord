// Module ID: 4949
// Function ID: 4950
// Name: basePick
// Dependencies: [4950, 641]

// Module 4949 (basePick)
import hasIn from "hasIn" /* 641 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};
