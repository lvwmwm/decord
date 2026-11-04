// Module ID: 15001
// Function ID: 15002
// Name: escape
// Dependencies: [625, 15002]

// Module 15001 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(15002);
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
