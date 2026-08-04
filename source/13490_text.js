// Module ID: 13490
// Function ID: 13491
// Name: text
// Dependencies: [13491, 13505]

// Module 13490 (text)

export default (arg0) => {
  const tmp = require(13491)(arg0, "string");
  let text = tmp;
  if (!require(13505)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
