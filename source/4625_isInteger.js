// Module ID: 4625
// Function ID: 4626
// Name: isInteger
// Dependencies: [572, 4617, 565, 566]

// Module 4625 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4617)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
