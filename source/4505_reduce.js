// Module ID: 4505
// Function ID: 4506
// Name: reduce
// Dependencies: [599, 4506, 4507, 720, 601]

// Module 4505 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4506);
  } else {
    tmpResult = tmp(4507);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
