// Module ID: 13584
// Function ID: 13585
// Name: text
// Dependencies: [13585, 13599]

// Module 13584 (text)

export default (arg0) => {
  const tmp = require(13585)(arg0, "string");
  let text = tmp;
  if (!require(13599)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
