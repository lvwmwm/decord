// Module ID: 14992
// Function ID: 14993
// Name: escape
// Dependencies: [625, 14993]

// Module 14992 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(14993);
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
