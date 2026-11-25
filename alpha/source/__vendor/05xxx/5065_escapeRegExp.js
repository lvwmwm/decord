// Module ID: 5065
// Function ID: 5066
// Name: escapeRegExp
// Dependencies: [625]

// Module 5065 (escapeRegExp)
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
