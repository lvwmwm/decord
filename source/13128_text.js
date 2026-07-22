// Module ID: 13128
// Function ID: 99525
// Name: text
// Dependencies: [13159, 13160]

// Module 13128 (text)

export default (arg0) => {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if (!require(dependencyMap[1])(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
