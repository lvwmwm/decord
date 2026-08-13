// Module ID: 5680
// Function ID: 5681
// Name: toPropertyKey
// Dependencies: [5681, 5682]

// Module 5680 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5681) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
