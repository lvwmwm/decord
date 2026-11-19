// Module ID: 5613
// Function ID: 5614
// Name: flatten
// Dependencies: [5614]

// Module 5613 (flatten)
import baseFlatten from "baseFlatten" /* 5614 */;


export default function flatten(arg0) {
  let items;
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
