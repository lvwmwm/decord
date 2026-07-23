// Module ID: 4267
// Function ID: 37377
// Name: reduce
// Dependencies: [591, 4268, 4269, 697, 593]

// Module 4267 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(591)(arg0)) {
    let tmpResult = tmp(4268);
  } else {
    tmpResult = tmp(4269);
  }
  return tmpResult(arg0, require(697) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(593) /* baseForOwn */);
};
