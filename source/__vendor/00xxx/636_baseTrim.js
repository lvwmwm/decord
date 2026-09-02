// Module ID: 636
// Function ID: 637
// Name: baseTrim
// Dependencies: [637]

// Module 636 (baseTrim)
import trimmedEndIndex from "trimmedEndIndex" /* 637 */;

const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, trimmedEndIndex(arr) + 1).replace(closure_2, "");
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
  }
  return replaced;
};
