// Module ID: 15221
// Function ID: 15222
// Name: escape
// Dependencies: [625, 15222]

// Module 15221 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(15222);
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
