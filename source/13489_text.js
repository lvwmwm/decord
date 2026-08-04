// Module ID: 13489
// Function ID: 13490
// Name: text
// Dependencies: [13490, 13504]

// Module 13489 (text)

export default (arg0) => {
  const tmp = require(13490)(arg0, "string");
  let text = tmp;
  if (!require(13504)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
