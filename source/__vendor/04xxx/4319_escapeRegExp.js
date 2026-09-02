// Module ID: 4319
// Function ID: 4320
// Name: escapeRegExp
// Dependencies: [759]

// Module 4319 (escapeRegExp)
import toString from "toString" /* 759 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = toString(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(closure_2, "\\$&");
    }
  }
  return replaced;
};
