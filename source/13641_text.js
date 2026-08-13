// Module ID: 13641
// Function ID: 13642
// Name: text
// Dependencies: [13642, 13656]

// Module 13641 (text)

export default (arg0) => {
  const tmp = require(13642)(arg0, "string");
  let text = tmp;
  if (!require(13656)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
