// Module ID: 5844
// Function ID: 5845
// Name: flatten
// Dependencies: [5845]

// Module 5844 (flatten)
import baseFlatten from "baseFlatten" /* 5845 */;


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
