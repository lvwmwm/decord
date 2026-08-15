// Module ID: 4622
// Function ID: 4623
// Name: flatten
// Dependencies: [4623]

// Module 4622 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4623) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
