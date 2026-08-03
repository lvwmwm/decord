// Module ID: 5493
// Function ID: 5494
// Name: toPropertyKey
// Dependencies: [5494, 5495]

// Module 5493 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5494) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
