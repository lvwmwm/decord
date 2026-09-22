// Module ID: 18127
// Function ID: 18128
// Name: deburr
// Dependencies: [630, 18128]

// Module 18127 (deburr)
import _mod630 from "module_630" /* 630 */;
import basePropertyOf from "basePropertyOf" /* 18128 */;

const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = _mod630(arg0);
  let replaced = str;
  if (str) {
    replaced = str.replace(re2, basePropertyOf).replace(closure_3, "");
    const str2 = str.replace(re2, basePropertyOf);
  }
  return replaced;
};
