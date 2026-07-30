// Module ID: 4471
// Function ID: 4472
// Name: isInteger
// Dependencies: [572, 4463, 565, 566]

// Module 4471 (isInteger)

export default function isInteger(arg0) {
  if (typeof arg0 !== "reType") {
    if (!require(572) /* isNaN */(arg0)) {
      if (tmp2(4463)(arg0)) {
        const tmp = tmp2(565)(arg0);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
