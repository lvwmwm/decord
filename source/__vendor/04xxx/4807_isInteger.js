// Module ID: 4807
// Function ID: 4808
// Name: isInteger
// Dependencies: [569, 4799, 562, 563]

// Module 4807 (isInteger)
import isNaN from "isNaN" /* 569 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4799)(num)) {
        const tmp = tmp2(562)(num);
        return tmp2(563)(tmp) === tmp;
      }
    }
  }
  return false;
};
