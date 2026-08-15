// Module ID: 13685
// Function ID: 13686
// Name: text
// Dependencies: [13686, 13700]

// Module 13685 (text)

export default (arg0) => {
  const tmp = require(13686)(arg0, "string");
  let text = tmp;
  if (!require(13700)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
