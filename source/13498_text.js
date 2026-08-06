// Module ID: 13498
// Function ID: 13499
// Name: text
// Dependencies: [13499, 13513]

// Module 13498 (text)

export default (arg0) => {
  const tmp = require(13499)(arg0, "string");
  let text = tmp;
  if (!require(13513)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
