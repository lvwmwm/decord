// Module ID: 604
// Function ID: 605
// Name: isMasked
// Dependencies: [605]

// Module 604 (isMasked)
import _mod605 from "module_605" /* 605 */;

const tmp = /[^.]+$/;
const exec = tmp.exec;
const tmp2 = _mod605 && _mod605.keys && _mod605.keys.IE_PROTO || "";
const match = exec(tmp2);
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp3}`;
}

export default function isMasked(arg0) {
  return str && tmp in arg0;
};
