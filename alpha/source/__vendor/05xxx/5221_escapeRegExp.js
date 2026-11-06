// Module ID: 5221
// Function ID: 5222
// Name: escapeRegExp
// Dependencies: [625]

// Module 5221 (escapeRegExp)
import toString from "toString" /* 625 */;

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
