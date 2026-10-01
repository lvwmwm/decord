// Module ID: 554
// Function ID: 555
// Name: baseTrim
// Dependencies: [555]

// Module 554 (baseTrim)
import trimmedEndIndex from "trimmedEndIndex" /* 555 */;

const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (replaced) {
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
    replaced = str.replace(re2, "");
  }
  return replaced;
};
