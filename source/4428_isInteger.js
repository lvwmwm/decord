// Module ID: 4428
// Function ID: 4429
// Name: isInteger
// Dependencies: [572, 4420, 565, 566]

// Module 4428 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4420)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
