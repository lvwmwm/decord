// Module ID: 722
// Function ID: 723
// Name: toKey
// Dependencies: [635]

// Module 722 (toKey)
import isSymbol from "isSymbol" /* 635 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!isSymbol(str)) {
      const text = `${str}`;
      if ("0" !== `${str}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};
