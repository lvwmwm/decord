// Module ID: 700
// Function ID: 8703
// Name: isStrictComparable
// Dependencies: [573]

// Module 700 (isStrictComparable)

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !require(573) /* isObject */(arg0);
  }
  return tmp;
};
