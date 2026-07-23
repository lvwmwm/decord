// Module ID: 4251
// Function ID: 37347
// Name: keysIn
// Dependencies: [595, 602, 4252]

// Module 4251 (keysIn)

export default function keysIn(arg0) {
  if (require(595) /* isArrayLike */(arg0)) {
    let tmp3 = tmp(602)(arg0, true);
  } else {
    tmp3 = tmp(4252)(arg0);
  }
  return tmp3;
};
