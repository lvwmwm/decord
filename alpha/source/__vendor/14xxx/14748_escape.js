// Module ID: 14748
// Function ID: 14749
// Name: escape
// Dependencies: [625, 14749]

// Module 14748 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(14749);
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
