// Module ID: 8
// Function ID: 144
// Name: toPropertyKey
// Dependencies: [9, 10]

// Module 8 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(9) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
