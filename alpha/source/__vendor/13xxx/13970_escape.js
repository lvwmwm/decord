// Module ID: 13970
// Function ID: 13971
// Name: escape
// Dependencies: [625, 13971]

// Module 13970 (escape)
import toString from "toString" /* 625 */;

let tmp;
const basePropertyOf = tmp(13971);
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
