// Module ID: 43
// Function ID: 44
// Name: toPropertyKey
// Dependencies: [44, 45]

// Module 43 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(44) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
