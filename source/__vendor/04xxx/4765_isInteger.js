// Module ID: 4765
// Function ID: 4766
// Name: isInteger
// Dependencies: [572, 4757, 565, 566]

// Module 4765 (isInteger)
import isNaN from "isNaN" /* 572 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4757)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
