// Module ID: 4252
// Function ID: 37360
// Name: keysIn
// Dependencies: [595, 602, 4253]

// Module 4252 (keysIn)

export default function keysIn(arg0) {
  if (require(595) /* isArrayLike */(arg0)) {
    let tmp3 = tmp(602)(arg0, true);
  } else {
    tmp3 = tmp(4253)(arg0);
  }
  return tmp3;
};
