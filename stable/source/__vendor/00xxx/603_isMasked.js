// Module ID: 603
// Function ID: 604
// Name: isMasked
// Dependencies: [604]

// Module 603 (isMasked)
import _mod604 from "module_604" /* 604 */;

const tmp = /[^.]+$/;
const exec = tmp.exec;
const tmp2 = _mod604 && _mod604.keys && _mod604.keys.IE_PROTO || "";
const match = exec(tmp2);
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp3}`;
}

export default function isMasked(arg0) {
  return str && tmp in arg0;
};
