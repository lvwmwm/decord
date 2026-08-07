// Module ID: 13512
// Function ID: 13513
// Name: text
// Dependencies: [13513, 13527]

// Module 13512 (text)

export default (arg0) => {
  const tmp = require(13513)(arg0, "string");
  let text = tmp;
  if (!require(13527)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
