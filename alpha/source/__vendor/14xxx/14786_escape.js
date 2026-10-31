// Module ID: 14786
// Function ID: 14787
// Name: escape
// Dependencies: [625, 14787]

// Module 14786 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(14787);
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
