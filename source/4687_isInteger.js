// Module ID: 4687
// Function ID: 4688
// Name: isInteger
// Dependencies: [572, 4679, 565, 566]

// Module 4687 (isInteger)
import isNaN from "isNaN" /* 572 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4679)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
