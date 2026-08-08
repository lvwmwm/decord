// Module ID: 5640
// Function ID: 5641
// Name: toPropertyKey
// Dependencies: [5641, 5642]

// Module 5640 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5641) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
