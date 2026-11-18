// Module ID: 10539
// Function ID: 10540
// Name: escape
// Dependencies: [625, 10540]

// Module 10539 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(10540);
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
