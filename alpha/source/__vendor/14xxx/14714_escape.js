// Module ID: 14714
// Function ID: 14715
// Name: escape
// Dependencies: [637, 14715]

// Module 14714 (escape)
import toString from "toString" /* 637 */;

let tmp;
const basePropertyOf = tmp(14715);
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
