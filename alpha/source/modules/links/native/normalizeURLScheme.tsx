// Module ID: 5869
// Function ID: 5870
// Name: normalizeURLScheme
// Dependencies: [2]
// Exports: default

// Module 5869 (normalizeURLScheme)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/native/normalizeURLScheme.tsx");

export default function normalizeURLScheme(str) {
  let sum = str;
  const obj = /^[a-zA-Z0-9+-.]+:/;
  if (!obj.test(str)) {
    let str2 = "https://";
    if (str.startsWith("//")) {
      str2 = "https:";
    }
    sum = str2 + str;
  }
  return sum;
};
