// Module ID: 700
// Function ID: 8698
// Name: isStrictComparable
// Dependencies: [705]

// Module 700 (isStrictComparable)

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !require(dependencyMap[0])(arg0);
  }
  return tmp;
};
