// Module ID: 5427
// Function ID: 5428
// Name: toPropertyKey
// Dependencies: [5428, 5429]

// Module 5427 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5428) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
