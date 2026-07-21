// Module ID: 13119
// Function ID: 99470
// Name: text
// Dependencies: [0, 0]

// Module 13119 (text)

export default (arg0) => {
  const tmp = require(dependencyMap[0])(arg0, "string");
  let text = tmp;
  if (!require(dependencyMap[1])(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
