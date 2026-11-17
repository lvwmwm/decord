// Module ID: 11257
// Function ID: 11258
// Name: escape
// Dependencies: [625, 11258]

// Module 11257 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(11258);
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
