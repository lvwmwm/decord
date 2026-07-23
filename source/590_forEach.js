// Module ID: 590
// Function ID: 7010
// Name: forEach
// Dependencies: [591, 592, 593, 617]

// Module 590 (forEach)

export default function forEach(arg0, arg1) {
  if (require(591)(arg0)) {
    let tmpResult = tmp(592);
  } else {
    tmpResult = tmp(593);
  }
  return tmpResult(arg0, require(617) /* castFunction */(arg1));
};
