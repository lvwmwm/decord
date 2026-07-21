// Module ID: 5146
// Function ID: 43637
// Name: toPropertyKey
// Dependencies: []

// Module 5146 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
