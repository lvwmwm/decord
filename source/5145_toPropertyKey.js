// Module ID: 5145
// Function ID: 43589
// Name: toPropertyKey
// Dependencies: []

// Module 5145 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
