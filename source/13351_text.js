// Module ID: 13351
// Function ID: 102313
// Name: text
// Dependencies: [13352, 13366]

// Module 13351 (text)

export default (arg0) => {
  const tmp = require(13352)(arg0, "string");
  let text = tmp;
  if (!require(13366)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
