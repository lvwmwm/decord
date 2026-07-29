// Module ID: 4396
// Function ID: 4397
// Name: uniqueId
// Dependencies: [762]

// Module 4396 (uniqueId)
let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return require(762) /* toString */(arg0) + sum;
};
