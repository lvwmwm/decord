// Module ID: 4633
// Function ID: 4634
// Name: flatten
// Dependencies: [4634]

// Module 4633 (flatten)
import baseFlatten from "baseFlatten" /* 4634 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
