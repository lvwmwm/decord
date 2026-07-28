// Module ID: 4326
// Function ID: 37655
// Name: flatten
// Dependencies: [4327]

// Module 4326 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4327) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
