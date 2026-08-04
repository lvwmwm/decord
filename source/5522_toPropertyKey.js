// Module ID: 5522
// Function ID: 5523
// Name: toPropertyKey
// Dependencies: [5523, 5524]

// Module 5522 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5523) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
