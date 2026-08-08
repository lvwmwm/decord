// Module ID: 4510
// Function ID: 4511
// Name: uniqueId
// Dependencies: [762]

// Module 4510 (uniqueId)
let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return require(762) /* toString */(arg0) + sum;
};
