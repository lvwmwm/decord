// Module ID: 600
// Function ID: 601
// Name: toKey
// Dependencies: [553]

// Module 600 (toKey)
import isSymbol from "isSymbol" /* 553 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!isSymbol(str)) {
      let str2;
      const text = `${str}`;
      if ("0" !== `${str}`) {
        str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};
