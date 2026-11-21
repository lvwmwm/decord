// Module ID: 10579
// Function ID: 10580
// Name: escape
// Dependencies: [625, 10580]

// Module 10579 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(10580);
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
