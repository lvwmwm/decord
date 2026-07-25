// Module ID: 4268
// Function ID: 37389
// Name: reduce
// Dependencies: [591, 4269, 4270, 697, 593]

// Module 4268 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(591)(arg0)) {
    let tmpResult = tmp(4269);
  } else {
    tmpResult = tmp(4270);
  }
  return tmpResult(arg0, require(697) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(593) /* baseForOwn */);
};
