// Module ID: 8572
// Function ID: 68128
// Name: _fetchText
// Dependencies: [5, 27, 488]
// Exports: fetchText

// Module 8572 (_fetchText)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Platform } from "get ActivityIndicator";

const require = arg1;
function _fetchText() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchUriData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function decodeBase64Image(arg0) {
  const str = decodeURIComponent(arg0);
  const parts = decodeURIComponent(arg0).split(";")[1].split(",");
  const substr = parts.slice(1);
  const joined = substr.join(",");
  const _Buffer = require(488) /* createBuffer */.Buffer;
  const str2 = decodeURIComponent(arg0).split(";")[1];
  return _Buffer.from(joined, parts[0]).toString("utf-8");
}

export const fetchText = function fetchText(uri) {
  return _fetchText(...arguments);
};
