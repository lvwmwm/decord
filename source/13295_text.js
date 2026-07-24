// Module ID: 13295
// Function ID: 102008
// Name: text
// Dependencies: [13296, 13310]

// Module 13295 (text)

export default (arg0) => {
  const tmp = require(13296)(arg0, "string");
  let text = tmp;
  if (!require(13310)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
