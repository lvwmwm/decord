// Module ID: 4302
// Function ID: 37502
// Name: reduce
// Dependencies: [591, 4303, 4304, 697, 593]

// Module 4302 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(591)(arg0)) {
    let tmpResult = tmp(4303);
  } else {
    tmpResult = tmp(4304);
  }
  return tmpResult(arg0, require(697) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(593) /* baseForOwn */);
};
