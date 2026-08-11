// Module ID: 13592
// Function ID: 13593
// Name: text
// Dependencies: [13593, 13607]

// Module 13592 (text)

export default (arg0) => {
  const tmp = require(13593)(arg0, "string");
  let text = tmp;
  if (!require(13607)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
