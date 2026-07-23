// Module ID: 601
// Function ID: 7031
// Name: keys
// Dependencies: [595, 602, 613]

// Module 601 (keys)

export default function keys(arg0) {
  if (require(595) /* isArrayLike */(arg0)) {
    let tmp3 = tmp(602)(arg0);
  } else {
    tmp3 = tmp(613)(arg0);
  }
  return tmp3;
};
