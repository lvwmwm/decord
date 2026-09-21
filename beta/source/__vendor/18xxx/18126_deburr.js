// Module ID: 18126
// Function ID: 18127
// Name: deburr
// Dependencies: [630, 18127]

// Module 18126 (deburr)
import _mod630 from "module_630" /* 630 */;
import basePropertyOf from "basePropertyOf" /* 18127 */;

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
