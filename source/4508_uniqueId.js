// Module ID: 4508
// Function ID: 4509
// Name: uniqueId
// Dependencies: [762]

// Module 4508 (uniqueId)
let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return require(762) /* toString */(arg0) + sum;
};
