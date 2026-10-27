// Module ID: 14256
// Function ID: 14257
// Name: escape
// Dependencies: [637, 14257]

// Module 14256 (escape)
import toString from "toString" /* 637 */;

let tmp;
const basePropertyOf = tmp(14257);
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
