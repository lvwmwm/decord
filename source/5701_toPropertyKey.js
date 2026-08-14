// Module ID: 5701
// Function ID: 5702
// Name: toPropertyKey
// Dependencies: [5702, 5703]

// Module 5701 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5702) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
