// Module ID: 5561
// Function ID: 5562
// Name: toPropertyKey
// Dependencies: [5562, 5563]

// Module 5561 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5562) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
