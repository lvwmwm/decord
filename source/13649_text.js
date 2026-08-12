// Module ID: 13649
// Function ID: 13650
// Name: text
// Dependencies: [13650, 13664]

// Module 13649 (text)

export default (arg0) => {
  const tmp = require(13650)(arg0, "string");
  let text = tmp;
  if (!require(13664)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
