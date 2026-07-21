// Module ID: 5147
// Function ID: 43630
// Name: toPropertyKey
// Dependencies: []

// Module 5147 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
