// Module ID: 4675
// Function ID: 4676
// Name: escapeRegExp
// Dependencies: [626]

// Module 4675 (escapeRegExp)
import toString from "toString" /* 626 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = toString(arg0);
  let replaced = str;
  if (replaced) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, "\\$&");
    }
  }
  return replaced;
};
