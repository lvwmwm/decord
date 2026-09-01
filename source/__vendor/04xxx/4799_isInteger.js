// Module ID: 4799
// Function ID: 4800
// Name: isInteger
// Dependencies: [572, 4791, 565, 566]

// Module 4799 (isInteger)
import isNaN from "isNaN" /* 572 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4791)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
