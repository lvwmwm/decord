// Module ID: 13582
// Function ID: 13583
// Name: text
// Dependencies: [13583, 13597]

// Module 13582 (text)

export default (arg0) => {
  const tmp = require(13583)(arg0, "string");
  let text = tmp;
  if (!require(13597)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
