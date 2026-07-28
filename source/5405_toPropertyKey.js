// Module ID: 5405
// Function ID: 46164
// Name: toPropertyKey
// Dependencies: [5406, 5407]

// Module 5405 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5406) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
