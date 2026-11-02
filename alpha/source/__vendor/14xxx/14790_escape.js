// Module ID: 14790
// Function ID: 14791
// Name: escape
// Dependencies: [625, 14791]

// Module 14790 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(14791);
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
