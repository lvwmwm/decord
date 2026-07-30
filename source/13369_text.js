// Module ID: 13369
// Function ID: 13370
// Name: text
// Dependencies: [13370, 13384]

// Module 13369 (text)

export default (arg0) => {
  const tmp = require(13370)(arg0, "string");
  let text = tmp;
  if (!require(13384)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
