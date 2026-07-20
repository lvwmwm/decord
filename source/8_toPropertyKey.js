// Module ID: 8
// Function ID: 144
// Name: toPropertyKey
// Dependencies: []

// Module 8 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
