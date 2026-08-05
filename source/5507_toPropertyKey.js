// Module ID: 5507
// Function ID: 5508
// Name: toPropertyKey
// Dependencies: [5508, 5509]

// Module 5507 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5508) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
