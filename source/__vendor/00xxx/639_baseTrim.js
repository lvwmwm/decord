// Module ID: 639
// Function ID: 640
// Name: baseTrim
// Dependencies: [640]

// Module 639 (baseTrim)
import trimmedEndIndex from "trimmedEndIndex" /* 640 */;

const re2 = /^\s+/;

export default function baseTrim(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr.slice(0, trimmedEndIndex(arr) + 1).replace(closure_2, "");
    const str = arr.slice(0, trimmedEndIndex(arr) + 1);
  }
  return replaced;
};
