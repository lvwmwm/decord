// Module ID: 13653
// Function ID: 13654
// Name: text
// Dependencies: [13654, 13668]

// Module 13653 (text)

export default (arg0) => {
  const tmp = require(13654)(arg0, "string");
  let text = tmp;
  if (!require(13668)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
