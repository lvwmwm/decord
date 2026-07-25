// Module ID: 13306
// Function ID: 102135
// Name: text
// Dependencies: [13307, 13321]

// Module 13306 (text)

export default (arg0) => {
  const tmp = require(13307)(arg0, "string");
  let text = tmp;
  if (!require(13321)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
