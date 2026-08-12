// Module ID: 4493
// Function ID: 4494
// Name: flatten
// Dependencies: [4494]

// Module 4493 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4494) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
