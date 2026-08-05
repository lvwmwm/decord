// Module ID: 13461
// Function ID: 13462
// Name: text
// Dependencies: [13462, 13476]

// Module 13461 (text)

export default (arg0) => {
  const tmp = require(13462)(arg0, "string");
  let text = tmp;
  if (!require(13476)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
