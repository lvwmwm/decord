// Module ID: 14261
// Function ID: 14262
// Name: escape
// Dependencies: [637, 14262]

// Module 14261 (escape)
import toString from "toString" /* 637 */;

let tmp;
const basePropertyOf = tmp(14262);
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
