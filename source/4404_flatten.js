// Module ID: 4404
// Function ID: 4405
// Name: flatten
// Dependencies: [4405]

// Module 4404 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4405) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
