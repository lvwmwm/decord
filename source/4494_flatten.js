// Module ID: 4494
// Function ID: 4495
// Name: flatten
// Dependencies: [4495]

// Module 4494 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4495) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
