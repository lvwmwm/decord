// Module ID: 13374
// Function ID: 13375
// Name: text
// Dependencies: [13375, 13389]

// Module 13374 (text)

export default (arg0) => {
  const tmp = require(13375)(arg0, "string");
  let text = tmp;
  if (!require(13389)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
