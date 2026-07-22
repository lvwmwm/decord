// Module ID: 4287
// Function ID: 37498
// Name: flatten
// Dependencies: []

// Module 4287 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(dependencyMap[0])(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
