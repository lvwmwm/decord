// Module ID: 4600
// Function ID: 4601
// Name: escapeRegExp
// Dependencies: [630]

// Module 4600 (escapeRegExp)
import _mod630 from "module_630" /* 630 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = _mod630(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, "\\$&");
    }
  }
  return replaced;
};
