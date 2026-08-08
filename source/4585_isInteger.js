// Module ID: 4585
// Function ID: 4586
// Name: isInteger
// Dependencies: [572, 4577, 565, 566]

// Module 4585 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4577)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
