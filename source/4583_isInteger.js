// Module ID: 4583
// Function ID: 4584
// Name: isInteger
// Dependencies: [572, 4575, 565, 566]

// Module 4583 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4575)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
