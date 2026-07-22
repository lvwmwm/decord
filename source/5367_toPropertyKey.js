// Module ID: 5367
// Function ID: 46007
// Name: toPropertyKey
// Dependencies: []

// Module 5367 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
