// Module ID: 4465
// Function ID: 4466
// Name: reduce
// Dependencies: [599, 4466, 4467, 720, 601]

// Module 4465 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4466);
  } else {
    tmpResult = tmp(4467);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
