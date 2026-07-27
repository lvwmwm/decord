// Module ID: 4292
// Function ID: 37543
// Name: flatten
// Dependencies: [4293]

// Module 4292 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4293) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
