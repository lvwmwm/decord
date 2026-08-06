// Module ID: 4566
// Function ID: 4567
// Name: isInteger
// Dependencies: [572, 4558, 565, 566]

// Module 4566 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4558)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
