// Module ID: 4417
// Function ID: 4418
// Name: reduce
// Dependencies: [599, 4418, 4419, 720, 601]

// Module 4417 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4418);
  } else {
    tmpResult = tmp(4419);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
