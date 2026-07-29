// Module ID: 4351
// Function ID: 4352
// Name: reduce
// Dependencies: [599, 4352, 4353, 720, 601]

// Module 4351 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4352);
  } else {
    tmpResult = tmp(4353);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
