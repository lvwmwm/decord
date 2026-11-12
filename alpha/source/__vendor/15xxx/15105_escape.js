// Module ID: 15105
// Function ID: 15106
// Name: escape
// Dependencies: [625, 15106]

// Module 15105 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(15106);
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
