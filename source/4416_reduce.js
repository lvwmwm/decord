// Module ID: 4416
// Function ID: 4417
// Name: reduce
// Dependencies: [599, 4417, 4418, 720, 601]

// Module 4416 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4417);
  } else {
    tmpResult = tmp(4418);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
