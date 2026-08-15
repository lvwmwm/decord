// Module ID: 7052
// Function ID: 7053
// Name: toPropertyKey
// Dependencies: [7053, 7054]

// Module 7052 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(7053) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
