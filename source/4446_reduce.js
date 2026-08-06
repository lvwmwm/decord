// Module ID: 4446
// Function ID: 4447
// Name: reduce
// Dependencies: [599, 4447, 4448, 720, 601]

// Module 4446 (reduce)

export default function reduce(arg0, arg1, arg2) {
  if (require(599)(arg0)) {
    let tmpResult = tmp(4447);
  } else {
    tmpResult = tmp(4448);
  }
  return tmpResult(arg0, require(720) /* baseIteratee */(arg1, 4), arg2, arguments.length < 3, require(601) /* baseForOwn */);
};
