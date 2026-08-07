// Module ID: 5580
// Function ID: 5581
// Name: toPropertyKey
// Dependencies: [5581, 5582]

// Module 5580 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5581) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
