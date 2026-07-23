// Module ID: 13242
// Function ID: 101681
// Name: text
// Dependencies: [13243, 13257]

// Module 13242 (text)

export default (arg0) => {
  const tmp = require(13243)(arg0, "string");
  let text = tmp;
  if (!require(13257)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
