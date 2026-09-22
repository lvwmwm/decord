// Module ID: 4598
// Function ID: 4599
// Name: escapeRegExp
// Dependencies: [626]

// Module 4598 (escapeRegExp)
import _mod626 from "module_626" /* 626 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = _mod626(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, "\\$&");
    }
  }
  return replaced;
};
