// Module ID: 14228
// Function ID: 14229
// Name: escape
// Dependencies: [637, 14229]

// Module 14228 (escape)
import toString from "toString" /* 637 */;

let tmp;
const basePropertyOf = tmp(14229);
tmp = /[&<>"']/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escape(arg0) {
  const str = toString(arg0);
  let replaced = str;
  if (replaced) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, basePropertyOf);
    }
  }
  return replaced;
};
