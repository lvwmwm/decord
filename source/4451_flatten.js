// Module ID: 4451
// Function ID: 4452
// Name: flatten
// Dependencies: [4452]

// Module 4451 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4452) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
