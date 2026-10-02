// Module ID: 4677
// Function ID: 4678
// Name: escapeRegExp
// Dependencies: [638]

// Module 4677 (escapeRegExp)
import toString from "toString" /* 638 */;

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
