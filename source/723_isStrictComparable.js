// Module ID: 723
// Function ID: 724
// Name: isStrictComparable
// Dependencies: [606]

// Module 723 (isStrictComparable)

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !require(606) /* isObject */(arg0);
  }
  return tmp;
};
