// Module ID: 5370
// Function ID: 46031
// Name: toPropertyKey
// Dependencies: [5371, 5372]

// Module 5370 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5371) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
