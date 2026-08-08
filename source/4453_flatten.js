// Module ID: 4453
// Function ID: 4454
// Name: flatten
// Dependencies: [4454]

// Module 4453 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4454) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
