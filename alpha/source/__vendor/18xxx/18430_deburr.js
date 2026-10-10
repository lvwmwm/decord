// Module ID: 18430
// Function ID: 18431
// Name: deburr
// Dependencies: [637, 18431]

// Module 18430 (deburr)
import toString from "toString" /* 637 */;

let tmp;
const basePropertyOf = tmp(18431);
const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = toString(arg0);
  let replaced = str;
  if (replaced) {
    const str2 = str.replace(re2, basePropertyOf);
    replaced = str2.replace(closure_3, "");
  }
  return replaced;
};
