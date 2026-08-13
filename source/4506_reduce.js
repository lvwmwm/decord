// Module ID: 4506
// Function ID: 4507
// Name: reduce
// Dependencies: [599, 4507, 4508, 720, 601]

// Module 4506 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4507);
  } else {
    tmpResult = tmp(4508);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
