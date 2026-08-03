// Module ID: 13456
// Function ID: 13457
// Name: text
// Dependencies: [13457, 13471]

// Module 13456 (text)

export default (arg0) => {
  const tmp = require(13457)(arg0, "string");
  let text = tmp;
  if (!require(13471)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
