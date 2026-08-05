// Module ID: 4536
// Function ID: 4537
// Name: isInteger
// Dependencies: [572, 4528, 565, 566]

// Module 4536 (isInteger)

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!require(572) /* isNaN */(num)) {
      if (tmp2(4528)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
