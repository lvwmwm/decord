// Module ID: 608
// Function ID: 609
// Dependencies: [609]

// Module 608
import _mod609 from "module_609" /* 609 */;

const match = /[^.]+$/.exec(_mod609 && _mod609.keys && _mod609.keys.IE_PROTO || "");
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp2}`;
}

export default function isMasked(arg0) {
  let tmp2 = str;
  if (tmp2) {
    tmp2 = tmp in arg0;
  }
  return tmp2;
};
