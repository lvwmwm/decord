// Module ID: 6047
// Function ID: 6048
// Name: normalizeURLScheme
// Dependencies: [2]
// Exports: default

// Module 6047 (normalizeURLScheme)
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
