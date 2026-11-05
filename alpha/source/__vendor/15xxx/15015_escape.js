// Module ID: 15015
// Function ID: 15016
// Name: escape
// Dependencies: [625, 15016]

// Module 15015 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(15016);
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
