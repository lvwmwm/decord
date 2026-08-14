// Module ID: 4648
// Function ID: 4649
// Name: isInteger
// Dependencies: [572, 4640, 565, 566]

// Module 4648 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4640)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
