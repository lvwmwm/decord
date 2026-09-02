// Module ID: 4799
// Function ID: 4800
// Name: isInteger
// Dependencies: [569, 4791, 562, 563]

// Module 4799 (isInteger)
import isNaN from "isNaN" /* 569 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4791)(num)) {
        const tmp = tmp2(562)(num);
        return tmp2(563)(tmp) === tmp;
      }
    }
  }
  return false;
};
