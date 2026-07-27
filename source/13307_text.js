// Module ID: 13307
// Function ID: 102140
// Name: text
// Dependencies: [13308, 13322]

// Module 13307 (text)

export default (arg0) => {
  const tmp = require(13308)(arg0, "string");
  let text = tmp;
  if (!require(13322)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
