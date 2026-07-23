// Module ID: 4338
// Function ID: 38302
// Name: uniqueId
// Dependencies: [739]

// Module 4338 (uniqueId)
let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return require(739) /* toString */(arg0) + sum;
};
