// Module ID: 4991
// Function ID: 4992
// Name: escapeRegExp
// Dependencies: [637]

// Module 4991 (escapeRegExp)
import toString from "toString" /* 637 */;

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
