// Module ID: 4339
// Function ID: 4340
// Name: flatten
// Dependencies: [4340]

// Module 4339 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4340) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
