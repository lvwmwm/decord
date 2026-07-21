// Module ID: 13121
// Function ID: 99492
// Name: text
// Dependencies: [13152, 13153]

// Module 13121 (text)

export default (arg0) => {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if (!require(dependencyMap[1])(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
