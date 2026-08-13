// Module ID: 4626
// Function ID: 4627
// Name: isInteger
// Dependencies: [572, 4618, 565, 566]

// Module 4626 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4618)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
