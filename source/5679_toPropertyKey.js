// Module ID: 5679
// Function ID: 5680
// Name: toPropertyKey
// Dependencies: [5680, 5681]

// Module 5679 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5680) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
