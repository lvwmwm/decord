// Module ID: 616
// Function ID: 617
// Name: isMasked
// Dependencies: [617]

// Module 616 (isMasked)
import _mod617 from "module_617" /* 617 */;

const tmp = /[^.]+$/;
const exec = tmp.exec;
const tmp2 = _mod617 && _mod617.keys && _mod617.keys.IE_PROTO || "";
const match = exec(tmp2);
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp3}`;
}

export default function isMasked(arg0) {
  return str && tmp in arg0;
};
