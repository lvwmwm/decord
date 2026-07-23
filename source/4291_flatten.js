// Module ID: 4291
// Function ID: 37530
// Name: flatten
// Dependencies: [4292]

// Module 4291 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4292) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
