// Module ID: 593
// Function ID: 594
// Dependencies: [553]

// Module 593
import _mod553 from "module_553" /* 553 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!_mod553(str)) {
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
