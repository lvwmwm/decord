// Module ID: 4434
// Function ID: 4435
// Name: flatten
// Dependencies: [4435]

// Module 4434 (flatten)

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require(4435) /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
