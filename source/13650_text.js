// Module ID: 13650
// Function ID: 13651
// Name: text
// Dependencies: [13651, 13665]

// Module 13650 (text)

export default (arg0) => {
  const tmp = require(13651)(arg0, "string");
  let text = tmp;
  if (!require(13665)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
