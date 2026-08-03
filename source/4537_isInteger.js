// Module ID: 4537
// Function ID: 4538
// Name: isInteger
// Dependencies: [572, 4529, 565, 566]

// Module 4537 (isInteger)

export default function isInteger(arg0) {
  if (typeof arg0 !== "SENTRY_RELEASE") {
    if (!require(572) /* isNaN */(arg0)) {
      if (tmp2(4529)(arg0)) {
        const tmp = tmp2(565)(arg0);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};
